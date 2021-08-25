import { Header as rawHeaderProps } from 'settings/types/sanity-schema';
import {
  ExternalLinkWithTitleProp,
  InternalLinkWithTitleProp,
} from 'settings/types/links';
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import {
  closeMobileNav,
  selectMobileNavStatus,
} from 'components/navigation/MobileNav/mobileNav.slice';
import { RiCloseLine } from 'react-icons/ri';
import { SuperLink } from '../../utils/links/SuperLink/SuperLink';

export interface MobileNavProps extends rawHeaderProps {
  navigation?: [ExternalLinkWithTitleProp, InternalLinkWithTitleProp];
}

export const MobileNav = ({
  navigation,
  isOpen,
  onClose,
}: Pick<MobileNavProps, 'navigation'>) => {
  const dispatch = useDispatch();
  const mobileNavOpen = useSelector(selectMobileNavStatus);

  return (
    <Drawer
      isOpen={isOpen}
      placement="left"
      onClose={onClose}
      closeOnOverlayClick
      closeOnEsc
      // finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <button
          type="button"
          aria-label="Increment value"
          onClick={() => dispatch(closeMobileNav())}
        >
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
};
