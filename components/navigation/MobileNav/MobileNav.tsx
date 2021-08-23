import { Header as rawHeaderProps } from 'types/sanity-schema';
import {
  ExternalLinkWithTitleProp,
  InternalLinkWithTitleProp,
} from 'types/links';
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { selectMobileNavStatus } from 'redux/slices/mobileNavSlice';
import { SuperLink } from '../raw-links/SuperLink/SuperLink';

export interface MobileNavProps extends rawHeaderProps {
  navigation?: [ExternalLinkWithTitleProp, InternalLinkWithTitleProp];
}

export const MobileNav = ({
  navigation,
}: Pick<MobileNavProps, 'navigation'>) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const mobileNavOpen = useSelector(selectMobileNavStatus);

  return (
    <Drawer
      isOpen={mobileNavOpen}
      placement="left"
      onClose={onClose}
      // finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />

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
};
