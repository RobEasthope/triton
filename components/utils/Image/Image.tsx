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

type ImgProps = {
  asset: ImageAssetProp;
  maxWidth: number;
  alt?: string;
  mode?: 'responsive' | 'fill';
  objectFit?: 'contain' | 'cover';
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

export const Img = ({
  asset,
  maxWidth,
  alt,
  mode = 'responsive',
  objectFit = 'cover',
  preview,
  className,
}: ImgProps) => {
  const configuredSanityClient = getClient(preview);
  const imageProps = useNextSanityImage(configuredSanityClient, asset);

  switch (mode) {
    case 'responsive':
      return () => {
        if (imageProps) {
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
        }
      };
    case 'fill':
      return () => {
        if (imageProps) {
          return (
            <FillImageWrapper maxWidth={maxWidth} className={className}>
              <Image
                src={imageProps.src}
                loader={imageProps.loader}
                layout="fill"
                objectFit={objectFit}
                alt={alt || ''}
              />
            </FillImageWrapper>
          );
        }
      };

    default:
      return null;
  }
};
