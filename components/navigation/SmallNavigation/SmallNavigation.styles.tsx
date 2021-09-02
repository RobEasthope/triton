import * as DialogPrimative from '@radix-ui/react-dialog';
import { styled } from 'stitches.config';

export const SmallNavigationButton = styled(DialogPrimative.Trigger, {
  '@media (min-width: 800px)': {
    display: 'none',
    visibility: 'hidden',
  },
});
