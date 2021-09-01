import { styled } from 'stitches.config';
import { typeSize } from 'utils/responsive/typeSize';

export const StitchesText = styled('p', {
  color: 'red',
  type: typeSize({ min: 18, max: 32 }),
});
