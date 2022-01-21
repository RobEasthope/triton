import { styled } from '@/UI/styles/stitches.config';

export const Wrapper = styled('div', {
  position: 'relative',
  overflow: 'hidden',

  variants: {
    mode: {
      cover: {
        height: '100%',
      },
      contain: {},
      next: {},
      responsive: {},
    },
  },
});

export const FadingImage = styled('img', {
  display: 'block',
  position: 'absolute',
  top: 0,
  transition: 'opacity 0.2s',

  '&.show': {
    opacity: 1,
  },
  '&.hide': {
    opacity: 0,
  },
});
