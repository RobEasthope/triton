import Image from 'next/image';
import styled from '@emotion/styled';
import {
  SanityAsset,
  SanityImageCrop,
  SanityImageHotspot,
} from 'types/sanity-schema';
import { getClient } from 'utils/sanity/sanity.server';
import { useNextSanityImage } from 'next-sanity-image';

export interface ImageAssetProp {
  _type: 'image';
  asset: SanityAsset;
  crop?: SanityImageCrop;
  hotspot?: SanityImageHotspot;
}

export type PictureProps = {
  asset: ImageAssetProp;
  maxWidth: number;
  alt?: string;
  mode?: 'responsive' | 'cover' | 'contain';
  preview: boolean;
  className?: string;
};

const ResponsiveImageWrapper = styled.div<{
  maxWidth?: number;
  className?: string;
}>`
  width: 100%;
  max-width: ${(props) => (props.maxWidth ? `${props.maxWidth}px` : '100% ')};
`;

const FillImageWrapper = styled.div<{ maxWidth?: number; className?: string }>`
  position: abolsute;
  width: 100%;
  height: 100%;
`;

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
          <ResponsiveImageWrapper maxWidth={maxWidth} className={className}>
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
          <FillImageWrapper maxWidth={maxWidth} className={className}>
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
          <FillImageWrapper maxWidth={maxWidth} className={className}>
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
