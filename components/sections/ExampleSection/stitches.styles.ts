import { styled } from 'stitches.config';
import { type } from 'utils/responsive/type';

export const StitchesText = styled('p', {
  color: 'red',
  type: type({ min: 18, max: 32, mt: 64, mb: 64 }),
});
