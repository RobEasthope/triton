import Image from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';

import {
  SanityImageAsset,
  SanityImageCrop,
  SanityImageHotspot,
  SanityReference,
} from '@/UI/types/sanity-schema';
import { getClient } from '@/UTILS/sanity-api/sanity.server';
import { SanityImage } from '../SanityImage/SanityImage';
import { styled } from '@/UI/styles/stitches.config';

// STYLES
export const ResponsiveImageWrapper = styled('div', {
  width: '100%',

  '& img': {
    width: '100%',
  },
});

export const CoverImageWrapper = styled('div', {
  width: '100%',

  '& img': {
    objectFit: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});

// TYPES
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
  mode: 'responsive' | 'cover' | 'contain' | 'next';
  preview?: boolean;
  className?: string;
  aspectRatio?: number;
};

// MARKUP
export const Picture = ({
  asset,
  maxWidth,
  alt,
  mode = 'responsive',
  aspectRatio,
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
            <SanityImage
              asset={asset}
              mode={mode}
              maxWidth={maxWidth}
              aspectRatio={aspectRatio}
              alt={alt || ''}
            />
          </ResponsiveImageWrapper>
        );

      case 'cover':
        return (
          <CoverImageWrapper
            style={{ maxWidth: `${maxWidth}px` }}
            className={className}
          >
            <SanityImage
              asset={asset}
              mode={mode}
              maxWidth={maxWidth}
              aspectRatio={aspectRatio}
              alt={alt || ''}
            />
          </CoverImageWrapper>
        );

      case 'next':
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

      default:
        return null;
    }
  }

  return null;
};
