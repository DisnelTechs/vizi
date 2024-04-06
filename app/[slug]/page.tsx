import Hero from "@/components/Hero";
import { DrupalEntity } from "@/types/drupal";
import { DrupalJsonApiParams } from "drupal-jsonapi-params";

interface PageProps {
  params: {
    slug: string;
  };
}

const Page = async ({ params: { slug } }: PageProps) => {
  const data = await getPageData(slug);
  const { title, field_subtitle } = data
    ? data.attributes
    : { title: slug, field_subtitle: "" };
  return <Hero title={title} subtitle={field_subtitle} />;
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
    const data = await res.json();
    const filteredData = data.data.filter(
      (page: DrupalEntity) => page.attributes.path.alias === `/${slug}`
    );
    if (filteredData.length === 0) return null;
    return filteredData[0];
  } catch (e) {
    console.error(e);
    return null;
  }
};

export default Page;
