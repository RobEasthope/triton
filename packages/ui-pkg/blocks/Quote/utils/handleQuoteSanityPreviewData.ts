import { blockPreview } from "sanity-pills";
import { BasicText } from "ui-pkg/types/sanity-schema";
import { ImageAssetProp } from "ui-pkg/base/Picture/Picture";

type HandleQuoteSanityPreviewDataProps = {
  quoteType: "quote" | "testimonial";
  quote: BasicText | null;
  quotee: string | null;
  photo: string | null;
  testimonialQuote: BasicText | null;
  testimonialQuotee: string | null;
  testimonialPhoto: string | null;
};

type HandleQuoteSanityPreviewDataReturnProps = {
  quote: string | null;
  quotee: string | null;
  photo: ImageAssetProp | null;
} | null;

export function handleQuoteSanityPreviewData({
  quoteType,
  quote = null,
  quotee = null,
  photo = null,
  testimonialQuote = null,
  testimonialQuotee = null,
  testimonialPhoto = null,
}: HandleQuoteSanityPreviewDataProps) {
  switch (quoteType) {
    case "quote":
      return {
        quote: blockPreview(quote) as string,
        quotee,
        photo,
      } as HandleQuoteSanityPreviewDataReturnProps;
    case "testimonial":
      return {
        quote: blockPreview(testimonialQuote) as string,
        quotee: testimonialQuotee,
        photo: testimonialPhoto,
      } as HandleQuoteSanityPreviewDataReturnProps;

    default:
      return null;
  }
}
