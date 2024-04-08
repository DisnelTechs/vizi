import Hero from "@/components/Hero";
import { getImageSrc, getNodeFromSlug } from "@/components/lib/utils";
import { DrupalEntity } from "@/types/drupal";
import { DrupalJsonApiParams } from "drupal-jsonapi-params";

interface PageProps {
  params: {
    slug: string;
  };
}

const Page = async ({ params: { slug } }: PageProps) => {
  const pageData = await getNodeFromSlug("page", slug, [
    "title",
    "field_subtitle",
    "path",
    "body"
  ]);
  const { title, field_subtitle, body } = pageData
    ? pageData.attributes
    : { title: slug, field_subtitle: "", body: { value: "" } };
  const imageSrc = pageData
    ? await getImageSrc("node--page", pageData.id, "field_hero_background")
    : "";
  return (
    <main>
      <Hero title={title} subtitle={field_subtitle} imgSrc={imageSrc} />
      <section className="container py-20">
        <div dangerouslySetInnerHTML={{ __html: body.value }} />
      </section>
    </main>
  );
};

/**
 * Fetches page data based on the provided slug.
 * @param slug - The slug of the page.
 * @returns The page data if found, otherwise null.
 * TODO: Restore caching once in production. Handle pagination scenarios (more than 50 items).
 */
const getPageData = async (slug: string) => {
  const apiParams = new DrupalJsonApiParams();
  apiParams.addFields("node--page", ["title", "field_subtitle", "path"]);

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_DRUPAL_URL}${
        process.env.JSON_API_ENDPOINT
      }/node/page?${apiParams.getQueryString({
        encode: false,
      })}`,
      { cache: "no-cache" }
    );
    const result = await res.json();
    const filteredData: DrupalEntity = result.data.find(
      (page: DrupalEntity) => page.attributes.path.alias === `/${slug}`
    );
    return filteredData ? filteredData : null;
  } catch (e) {
    console.error(e);
    return null;
  }
};

export default Page;
