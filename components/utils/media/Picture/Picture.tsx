import Image from 'next/image';
import {
  SanityImageAsset,
  SanityImageCrop,
  SanityImageHotspot,
  SanityReference,
} from 'types/sanity-schema';
import { getClient } from 'utils/sanity/sanity.server';
import { useNextSanityImage } from 'next-sanity-image';
import { ResponsiveImageWrapper, FillImageWrapper } from './Picture.styles.tsx';

export interface ImageAssetProp {
  _type: 'image';
  asset: SanityReference<SanityImageAsset>;
  crop?: SanityImageCrop;
  hotspot?: SanityImageHotspot;
}

export type PictureProps = {
  asset: ImageAssetProp;
  maxWidth: number;
  alt?: string;
  mode: 'responsive' | 'cover' | 'contain';
  preview: boolean;
  className?: string;
};

export const Picture = ({
  asset,
  maxWidth,
  alt,
  mode = 'responsive',
  preview,
  className,
}: PictureProps) => {
  const configuredSanityClient = getClient(preview);
  const imageProps = useNextSanityImage(configuredSanityClient, asset);
  if (imageProps) {
    switch (mode) {
      case 'responsive':
        return (
          <ResponsiveImageWrapper
            style={{ maxWidth: `${maxWidth}px` }}
            className={className}
          >
            <Image
              {...imageProps}
              placeholder="blur"
              layout="responsive"
              sizes={`(max-width: ${
                Math.ceil(maxWidth / 100) * 100
              }px) 100vw, ${Math.ceil(maxWidth / 100) * 100}px`}
              alt={alt || ''}
            />
          </ResponsiveImageWrapper>
        );

      case 'cover':
        return (
          <FillImageWrapper
            style={{ maxWidth: `${maxWidth}px` }}
            className={className}
          >
            <Image
              src={imageProps.src}
              loader={imageProps.loader}
              layout="fill"
              objectFit="cover"
              alt={alt || ''}
            />
          </FillImageWrapper>
        );

      case 'contain':
        return (
          <FillImageWrapper
            style={{ maxWidth: `${maxWidth}px` }}
            className={className}
          >
            <Image
              src={imageProps.src}
              loader={imageProps.loader}
              layout="fill"
              objectFit="contain"
              alt={alt || ''}
            />
          </FillImageWrapper>
        );

      default:
        return null;
    }
  }

  return null;
};
