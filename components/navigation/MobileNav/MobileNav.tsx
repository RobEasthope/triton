import { Header as rawHeaderProps } from 'types/sanity-schema';
import {
  ExternalLinkWithTitleProp,
  InternalLinkWithTitleProp,
} from 'types/links';

import { RiCloseLine, RiMenuLine } from 'react-icons/ri';
import * as DialogPrimative from '@radix-ui/react-dialog';
import { SuperLink } from '../../utils/links/SuperLink/SuperLink';

export interface MobileNavProps extends rawHeaderProps {
  navigation?: [ExternalLinkWithTitleProp, InternalLinkWithTitleProp];
}

export const MobileNav = ({
  navigation,
}: Pick<MobileNavProps, 'navigation'>) => (
  <DialogPrimative.Root>
    <DialogPrimative.Trigger>
      <RiMenuLine />
    </DialogPrimative.Trigger>
    <DialogPrimative.Overlay />
    <DialogPrimative.Content>
      <DialogPrimative.Title />
      <DialogPrimative.Description />

      <DialogPrimative.Close>
        <RiCloseLine />
      </DialogPrimative.Close>
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
    </DialogPrimative.Content>
  </DialogPrimative.Root>
);
