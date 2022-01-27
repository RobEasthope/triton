import * as React from 'react';
import { useSSRLayoutEffect } from '@/UI/utils/useSSRLayoutEffect';
import { BlurredImage } from '@/UI/base/media/SanityImage/components/BlurredImage/BlurredImage';

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
  const [hiResImageLoaded, setFullSizeImageLoaded] = React.useState(false);
  const hiResImageRef = React.useRef<HTMLImageElement>(null);

  useSSRLayoutEffect(() => {
    if (hiResImageRef.current?.complete) setFullSizeImageLoaded(true);
  }, []);

  React.useEffect(() => {
    if (!hiResImageRef.current) return;
    // if (hiResImageRef.current.complete) return;

    let current = true;
    hiResImageRef.current.addEventListener('load', () => {
      if (!hiResImageRef.current || !current) return;
      setTimeout(() => {
        setFullSizeImageLoaded(true);
      }, 0);
    });

    return () => {
      current = false;
    };
  }, [hiResImageRef, hiResImageLoaded]);

  const hiResImage = React.cloneElement(img, {
    // @ts-expect-error no idea 🤷‍♂️
    ref: hiResImageRef,
    className: `${hiResImageLoaded ? 'show' : 'hide'}`,
  });

  return (
    <>
      {blurredAssetUrl && (
        <BlurredImage
          src={blurredAssetUrl}
          className={img.props.className}
          alt={alt || ''}
          visibility={hiResImageLoaded ? 'hide' : 'show'}
        />
      )}
      {hiResImage}
      <noscript>{img}</noscript>
    </>
  );
}
