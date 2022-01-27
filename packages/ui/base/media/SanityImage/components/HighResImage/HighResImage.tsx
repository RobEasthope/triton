import { styled } from '@/UI/styles/stitches.config';

export const HighResImage = styled('img', {
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
