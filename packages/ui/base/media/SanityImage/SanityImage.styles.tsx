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
