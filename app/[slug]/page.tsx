import Hero from "@/components/Hero";
import { getImageSrc, getNodeFromSlug } from "@/components/lib/utils";
import { DrupalEntity } from "@/types/drupal";
import clsx from "clsx";
import { DrupalJsonApiParams } from "drupal-jsonapi-params";

interface PageProps {
  params: {
    slug: string;
  };
}

const getRandomPos = (radius: number) => {
  const sides = ["top", "right", "bottom", "left"];
  const selectedSide = sides[Math.floor(Math.random() * sides.length)];

  const fixedPos = `-${Math.trunc(radius / 2)}px`;

  if (selectedSide === "top" || selectedSide === "bottom") {
    return {
      [selectedSide]: fixedPos,
      left: Math.floor(Math.random() * 100) + "%",
    };
  }

  return {
    [selectedSide]: fixedPos,
    top: Math.floor(Math.random() * 100) + "%",
  };
};

const Page = async ({ params: { slug } }: PageProps) => {
  const pageData = await getNodeFromSlug("page", slug, [
    "title",
    "field_subtitle",
    "path",
    "body",
  ]);
  const { title, field_subtitle, body } = pageData
    ? pageData.attributes
    : { title: slug, field_subtitle: "", body: { value: "" } };
  const imageSrc = pageData
    ? await getImageSrc("node--page", pageData.id, "field_hero_background")
    : "";

  const radius = Math.trunc(100 + Math.random() * 300);
  const pos = getRandomPos(radius);

  return (
    <main>
      <Hero title={title} subtitle={field_subtitle} imgSrc={imageSrc} />
      <div className="relative overflow-hidden">
        {body && (
          <section className="px-5 lg:px-0 lg:max-w-4xl mx-auto py-20">
            <div className="relative z-10" dangerouslySetInnerHTML={{ __html: body.value }} />
            <div
              className="absolute bg-primary rounded-full border-8 border-black z-0 hidden lg:block"
              style={{
                width: `${radius}px`,
                height: `${radius}px`,
                ...pos,
              }}
            />
          </section>
        )}
      </div>
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
