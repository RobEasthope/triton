import type { ImageAssetProp } from "ui-pkg/base/Picture/Picture";
import { urlFor } from "apis-pkg/sanity/urlFor";

export const VectorImage = ({ asset, alt }: { asset: ImageAssetProp; alt: string }) => {
  const vectorImageUrl: string | null = urlFor(asset).url();

  // eslint-disable-next-line @next/next/no-img-element
  return <img src={vectorImageUrl || ""} alt={alt || ""} />;
};
