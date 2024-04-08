import { DrupalEntity } from "@/types/drupal";
import { DrupalJsonApiParams } from "drupal-jsonapi-params";

/**
 * Retrieves the source URL of a media image from a Drupal JSON:API endpoint.
 * Returns an empty string if the image source is not found.
 * @param uuid - The UUID of the Drupal node.
 * @param fieldName - The name of the field containing the image.
 * @returns The source URL of the image, or an empty string if the image source is not found.
 * TODO: Add entity type parameter to support other entity types.
 */
export async function getImageSrc(
  type: string = "node--page",
  uuid: string,
  fieldName: string
): Promise<string> {
  const [nodeType, bundle] = type.split("--");
  const apiParams = new DrupalJsonApiParams();
  apiParams
    .addInclude([`${fieldName}.thumbnail`])
    .addFields("file--file", ["uri"]);

  const url = `${
    process.env.NEXT_PUBLIC_DRUPAL_API_URL
  }/${nodeType}/${bundle}/${uuid}?${apiParams.getQueryString({
    encode: false,
  })}`;

  try {
    const response = await fetch(url, { cache: "no-cache" });

    if (!response.ok) {
      console.error("Failed to fetch image src:", response.statusText);
      return "";
    }

    const jsonData = await response.json();
    const imageSrc = jsonData.included.find(
      (item: any) => item.type === "file--file"
    );

    if (!imageSrc || !imageSrc.attributes.uri.url) {
      throw new Error("Image source not found.");
    }

    return `${process.env.NEXT_PUBLIC_DRUPAL_URL}${imageSrc.attributes.uri.url}`;
  } catch (error) {
    console.error("Failed to fetch image src:", error);
    return "";
  }
}

export async function getNodeFromSlug(
  type: string,
  slug: string,
  fields?: string[]
) {
  const apiParams = new DrupalJsonApiParams();
  if (fields) {
    apiParams.addFields(`node--${type}`, fields);
  }

  try {
    const res = await fetch(
      `${
        process.env.NEXT_PUBLIC_DRUPAL_API_URL
      }/node/${type}?${apiParams.getQueryString({
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
}
