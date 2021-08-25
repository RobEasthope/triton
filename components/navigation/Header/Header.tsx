import { Header as rawHeaderProps } from 'settings/types/sanity-schema';

import {
  ExternalLinkWithTitleProp,
  InternalLinkWithTitleProp,
} from 'settings/types/links';
import { MaxPageWidth } from 'components/utils/styles/MaxPageWidth/MaxPageWidth';
import { useDisclosure } from '@chakra-ui/react';
import { SuperLink } from '../../utils/links/SuperLink/SuperLink';
import { HeaderStyles } from './Header.styles';
import { HeaderLogo } from './components/HeaderLogo/HeaderLogo';
import { MobileNavBtn } from './components/MobileNavBtn/MobileNavBtn';
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
      <HeaderStyles as="header">
        <MaxPageWidth as="nav">
          <div className="layout">
            <HeaderLogo logo={logo} preview={preview} />

            <ul className="navigation">
              {navigation?.length > 0 &&
                navigation.map((nav) => (
                  <li key={nav?._key}>
                    <SuperLink link={nav}>{nav.title}</SuperLink>
                  </li>
                ))}
            </ul>

            <MobileNavBtn className="mobile-nav-btn" onClick={onOpen} />
          </div>
        </MaxPageWidth>
      </HeaderStyles>

      <MobileNav navigation={navigation} isOpen={isOpen} onClose={onClose} />
    </>
  );
};
