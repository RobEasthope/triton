import { RiMenuLine } from 'react-icons/ri';
import * as DialogPrimative from '@radix-ui/react-dialog';
import { styled } from '@/UI/styles/stitches.config';
import { Header as rawHeaderProps } from '@/UI/types/sanity-schema';
import {
  ExternalLinkWithTitleProp,
  InternalLinkWithTitleProp,
} from '@/UI/types/links';

import { SuperLink } from '@/UI/base/links/SuperLink/SuperLink';

// Styles 
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

// Types
export interface SmallNavigationProps extends rawHeaderProps {
  navigation?: [ExternalLinkWithTitleProp, InternalLinkWithTitleProp];
}

// Markup
export const SmallNavigation = ({
  navigation,
}: Pick<SmallNavigationProps, 'navigation'>) => (
  <DialogPrimative.Root>
    <OpenSmallNavigationButton>
      <RiMenuLine />
    </OpenSmallNavigationButton>

    <DialogOverlay />

    <DialogContent>
      <CloseSmallNavigationButton>Close</CloseSmallNavigationButton>

      <nav>
        <ul>
          {navigation?.length > 0 &&
            navigation.map((nav) => (
              <li key={nav?._key} className="link">
                <SuperLink className="" link={nav}>
                  {nav.title}
                </SuperLink>
              </li>
            ))}
        </ul>
      </nav>
    </DialogContent>
  </DialogPrimative.Root>
);
