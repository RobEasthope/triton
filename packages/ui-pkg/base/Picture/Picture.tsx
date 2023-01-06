import {
  SanityImageAsset,
  SanityImageCrop,
  SanityImageHotspot,
  SanityReference,
} from "ui-pkg/types/sanity-schema";
import { SanityImage } from "./components/SanityImage/SanityImage";

// TYPES
export interface ImageAssetProp {
  _type: "image";
  asset: SanityReference<SanityImageAsset>;
  crop?: SanityImageCrop;
  hotspot?: SanityImageHotspot;
}

export type PictureProps = {
  asset: ImageAssetProp | undefined;
  maxWidth: number;
  alt?: string;
  mode: "responsive" | "cover" | "contain" | "next";
  className?: string;
  assetClassName?: string;
  containAspectRatio?: number;
  aspectRatio?: number;
};

// MARKUP
export const Picture = ({
  asset,
  maxWidth,
  alt,
  mode = "responsive",
  aspectRatio,
  containAspectRatio = 1,
  className = "",
  assetClassName = "",
}: PictureProps) => {
  if (!asset) {
    return null;
  }

  switch (mode) {
    case "responsive":
      return (
        <div
          style={{ maxWidth: `${maxWidth}px` }}
          className={`responsive-image-wrapper ${className}`}
        >
          <SanityImage
            className={`responsive-image-element ${assetClassName}`}
            asset={asset}
            mode={mode}
            maxWidth={maxWidth}
            aspectRatio={aspectRatio}
            alt={alt || ""}
          />
        </div>
      );

    case "cover":
      return (
        <div
          style={{ maxWidth: `${maxWidth}px` }}
          className={`cover-image-wrapper ${className}`}
        >
          <SanityImage
            className={`cover-image-element ${assetClassName}`}
            asset={asset}
            mode={mode}
            maxWidth={maxWidth}
            aspectRatio={aspectRatio}
            alt={alt || ""}
          />
        </div>
      );

    case "contain":
      return (
        <div
          style={{ maxWidth: `${maxWidth}px`, position: "relative" }}
          className={`contain-image-wrapper ${className}`}
        >
          <div
            className="contain-image-wrapper"
            style={{
              paddingBottom: `${Math.floor(100 / containAspectRatio)}%`,
            }}
          >
            <SanityImage
              className={`contain-image-element ${assetClassName}`}
              asset={asset}
              mode={mode}
              maxWidth={maxWidth}
              aspectRatio={aspectRatio}
              alt={alt || ""}
            />
          </div>
        </div>
      );

    default:
      return null;
  }
};
