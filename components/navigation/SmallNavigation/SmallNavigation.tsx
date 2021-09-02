import { Header as rawHeaderProps } from 'types/sanity-schema';
import {
  ExternalLinkWithTitleProp,
  InternalLinkWithTitleProp,
} from 'types/links';

import { RiCloseLine, RiMenuLine } from 'react-icons/ri';
import * as DialogPrimative from '@radix-ui/react-dialog';
import { SuperLink } from '../../utils/links/SuperLink/SuperLink';
import {
  OpenSmallNavigationButton,
  CloseSmallNavigationButton,
  DialogOverlay,
  DialogContent,
} from './SmallNavigation.styles';

export interface SmallNavigationProps extends rawHeaderProps {
  navigation?: [ExternalLinkWithTitleProp, InternalLinkWithTitleProp];
}

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
