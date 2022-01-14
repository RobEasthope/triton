import { createImageUrlBuilder } from 'next-sanity';
import {
  SanityImageAsset,
  SanityImageCrop,
  SanityImageHotspot,
  SanityReference,
} from '@/UI/types/sanity-schema';
import { sanityConfig } from '@/UTILS/sanity/sanity-config';
import { BlurrableImage } from '../BlurrableImage/BlurrableImage';
// eslint-disable-next-line import/no-cycle
import { FadingImage, Wrapper } from './SanityImage.styles';

// TYPES
export interface ImageAssetProp {
  _type: 'image';
  asset: SanityReference<SanityImageAsset>;
  crop?: SanityImageCrop;
  hotspot?: SanityImageHotspot;
}

export type SanityImageProps = {
  asset: ImageAssetProp;
  maxWidth: number;
  mode: 'responsive' | 'cover' | 'contain' | 'next';
  alt?: string;
  aspectRatio?: number;
};

// MARKUP
export const SanityImage = ({
  asset,
  alt,
  mode,
  maxWidth,
  aspectRatio, // Default to 'natural/original' image aspect ratio
}: SanityImageProps) => {
  const imageBuilder = createImageUrlBuilder({
    dataset: 'production',
    projectId: 'xtxdr2ns',
  });

  // Abort if no asset has been passed in
  if (!asset) {
    return null;
  }

  // VECTORS
  // Render a basic img element if asset is an svg
  const assetRef = asset?.asset?._ref;

  if (assetRef.slice(-4) === '-svg') {
    const vectorImageUrl = imageBuilder.image(asset).url();

    // eslint-disable-next-line @next/next/no-img-element
    return <img src={vectorImageUrl} alt={alt || ''} />;
  }

  // BITMAPS
  // Round max width to nearest hundred to match Sanity's pre-generated assets. Rendered image width is handled seperately
  const roundedUpMaxWidth = Math.ceil(maxWidth / 100) * 100;

  // Set minimum asset width
  const minAssetWidth = 100;
  const BLURRING = 100;

  const blurredImage = () => {
    if (!aspectRatio) {
      // Generate url and push to array
      return `${imageBuilder
        .image(asset)
        .auto('format')
        .width(100)
        .blur(BLURRING)
        .url()}`;
    }
    return `${imageBuilder
      .image(asset)
      .auto('format')
      .width(100)
      .height(Math.floor(100 / aspectRatio))
      .blur(BLURRING)
      .url()}`;
  };

  const sizes = () => {
    let size = minAssetWidth;
    const widths = [];
    while (size <= roundedUpMaxWidth) {
      // Generate size option and push to array
      widths.push(`${size}w`);

      // Bump to next asset size
      size += 100;
    }

    return `(max-width: ${maxWidth}px) ${String(
      widths.map((width) => width as string)
    )}`;
  };

  const srcSet = () => {
    let size = minAssetWidth;
    const assetUrls = [];

    while (size <= roundedUpMaxWidth) {
      if (!aspectRatio) {
        // Generate url and push to array
        assetUrls.push(
          `${imageBuilder
            .image(asset)
            .auto('format')
            .fit('crop')
            .width(size)
            .url()} ${size}w`
        );
      } else {
        // Generate url and push to array
        assetUrls.push(
          `${imageBuilder
            .image(asset)
            .auto('format')
            .fit('crop')
            .width(size)
            .height(Math.floor(size / aspectRatio))
            .url()} ${size}w`
        );
      }

      // Bump to next asset size
      size += 100;
    }

    return `${String(assetUrls.map((assetUrl) => assetUrl as string))}`;
  };

  return (
    <Wrapper mode={mode}>
      <BlurrableImage
        img={<FadingImage sizes={sizes()} srcSet={srcSet()} />}
        blurredAssetUrl={blurredImage()}
        alt={alt}
      />
    </Wrapper>
  );
};
