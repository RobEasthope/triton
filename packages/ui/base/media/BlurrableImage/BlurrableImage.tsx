import * as React from 'react';
import { useSSRLayoutEffect } from '@/UI/utils/useSSRLayoutEffect';
import { styled } from '@/UI/styles/stitches.config';

// STYLES
const BlurredImage = styled('img', {
  display: 'block',
  position: 'static',

  variants: {
    visiblilty: {
      show: {
        opacity: 1,
      },
      hide: {
        opacity: 0,
      },
    },
  },
});

// TYPES
type BlurrableImageProps = {
  img: React.ReactElement<React.ImgHTMLAttributes<HTMLImageElement>>;
  alt?: string;
  blurredAssetUrl?: string;
} & React.HTMLAttributes<HTMLDivElement>;

// MARKUP
export function BlurrableImage({
  img,
  blurredAssetUrl,
  alt,
}: BlurrableImageProps) {
  const [fullSizeImageLoaded, setFullSizeImageLoaded] = React.useState(false);
  const fullSizeImageRef = React.useRef<HTMLImageElement>(null);

  useSSRLayoutEffect(() => {
    if (fullSizeImageRef.current?.complete) setFullSizeImageLoaded(true);
  }, []);

  React.useEffect(() => {
    if (!fullSizeImageRef.current) return;
    // if (fullSizeImageRef.current.complete) return;

    let current = true;
    fullSizeImageRef.current.addEventListener('load', () => {
      if (!fullSizeImageRef.current || !current) return;
      setTimeout(() => {
        setFullSizeImageLoaded(true);
      }, 0);
    });

    return () => {
      current = false;
    };
  }, [fullSizeImageRef, fullSizeImageLoaded]);

  const fullSizeImage = React.cloneElement(img, {
    // @ts-expect-error no idea 🤷‍♂️
    ref: fullSizeImageRef,
    className: `${fullSizeImageLoaded ? 'show' : 'hide'}`,
  });

  return (
    <>
      {blurredAssetUrl && (
        <BlurredImage
          src={blurredAssetUrl}
          className={img.props.className}
          alt={alt || ''}
          visiblilty={setFullSizeImageLoaded ? 'hide' : 'show'}
        />
      )}
      {fullSizeImage}
      <noscript>{img}</noscript>
    </>
  );
}
