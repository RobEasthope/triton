import { Header as rawHeaderProps } from 'types/sanity-schema';

import {
  ExternalLinkWithTitleProp,
  InternalLinkWithTitleProp,
} from 'types/links';
import { MaxPageWidth } from 'components/utils/styles/MaxPageWidth/MaxPageWidth';
import { useDisclosure } from '@chakra-ui/react';
import { RiMenuLine } from 'react-icons/ri';
import { PaddedComponent } from 'components/utils/styles/PaddedComponent/PaddedComponent';
import { SuperLink } from '../../utils/links/SuperLink/SuperLink';
import {
  HeaderLayout,
  HeaderStyles,
  LargeNavigation,
  MobileNavButton,
} from './Header.styles';
import { HeaderLogo } from './components/HeaderLogo/HeaderLogo';
import { MobileNav } from '../MobileNav/MobileNav';

export interface HeaderProps extends rawHeaderProps {
  navigation?: [ExternalLinkWithTitleProp, InternalLinkWithTitleProp];
  preview: boolean;
}

export const Header = ({
  logo,
  navigation,
  preview,
}: Pick<HeaderProps, 'logo' | 'navigation' | 'preview'>) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {/* Large nav */}
      <PaddedComponent as="header">
        <MaxPageWidth as="nav">
          <HeaderLayout>
            <HeaderLogo logo={logo} preview={preview} />

            <LargeNavigation className="navigation">
              {navigation?.length > 0 &&
                navigation.map((nav) => (
                  <li key={nav?._key}>
                    <SuperLink link={nav}>{nav.title}</SuperLink>
                  </li>
                ))}
            </LargeNavigation>

            <MobileNavButton
              type="button"
              aria-label="Open mobile navigation"
              onClick={onOpen}
              className="mobile-nav-btn"
            >
              <RiMenuLine />
            </MobileNavButton>
          </HeaderLayout>
        </MaxPageWidth>
      </PaddedComponent>

      {/* Small Nav */}
      <MobileNav navigation={navigation} isOpen={isOpen} onClose={onClose} />
    </>
  );
};
