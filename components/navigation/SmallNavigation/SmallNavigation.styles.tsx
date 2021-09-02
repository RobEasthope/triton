import * as DialogPrimative from '@radix-ui/react-dialog';
import { styled } from 'stitches.config';

export const OpenSmallNavigationButton = styled(DialogPrimative.Trigger, {
  border: 'none',

  '@media (min-width: 800px)': {
    display: 'none',
    visibility: 'hidden',
  },
});

export const CloseSmallNavigationButton = styled(DialogPrimative.Close, {
  border: 'none',
});
