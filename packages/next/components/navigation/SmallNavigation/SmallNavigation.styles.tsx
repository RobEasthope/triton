import * as DialogPrimative from '@radix-ui/react-dialog';
import { styled } from 'styles/stitches.config';

export const DialogContent = styled(DialogPrimative.Content, {
  backgroundColor: 'white',

  width: '300px',
  height: '100vh',

  borderRight: '1px solid black',
});

export const DialogOverlay = styled(DialogPrimative.Overlay, {
  backgroundColor: 'rgba(255, 255, 255, 0.5)',
  width: '100vw',
  height: '100vh',
});

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
