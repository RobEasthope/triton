import * as DialogPrimative from '@radix-ui/react-dialog';
import { styled } from 'stitches.config';

export const MobileNavButton = styled(DialogPrimative.Trigger, {
  '@media (min-width: 800px)': {
    display: 'none',
    visibility: 'hidden',
  },
});
