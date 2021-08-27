import { Header as rawHeaderProps } from 'types/sanity-schema';
import {
  ExternalLinkWithTitleProp,
  InternalLinkWithTitleProp,
} from 'types/links';
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
} from '@chakra-ui/react';

import { RiCloseLine } from 'react-icons/ri';
import { SuperLink } from '../../utils/links/SuperLink/SuperLink';

export interface MobileNavProps extends rawHeaderProps {
  navigation?: [ExternalLinkWithTitleProp, InternalLinkWithTitleProp];
  isOpen: boolean;
  onClose: VoidFunction;
}

export const MobileNav = ({
  navigation,
  isOpen,
  onClose,
}: Pick<MobileNavProps, 'navigation' | 'isOpen' | 'onClose'>) => (
  <Drawer
    isOpen={isOpen}
    placement="left"
    onClose={onClose}
    // finalFocusRef={btnRef}
  >
    <DrawerOverlay />
    <DrawerContent>
      <button type="button" aria-label="Increment value" onClick={onClose}>
        <RiCloseLine />
      </button>

      <DrawerBody>
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
      </DrawerBody>
    </DrawerContent>
  </Drawer>
);
