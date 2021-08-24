import { Header as rawHeaderProps } from 'settings/types/sanity-schema';

import {
  ExternalLinkWithTitleProp,
  InternalLinkWithTitleProp,
} from 'settings/types/links';
import { openMobileNav } from 'components/navigation/MobileNav/mobileNav.slice';
import { useDispatch } from 'react-redux';
import { useRef } from 'react';
import { RiMenuLine } from 'react-icons/ri';
import { MaxPageWidth } from 'components/utils/structural/MaxPageWidth/MaxPageWidth';
import { SuperLink } from '../raw-links/SuperLink/SuperLink';
import { HeaderStyles } from './Header.styles';
import { HeaderLogo } from './components/HeaderLogo/HeaderLogo';

export interface HeaderProps extends rawHeaderProps {
  navigation?: [ExternalLinkWithTitleProp, InternalLinkWithTitleProp];
  preview: boolean;
}

export const Header = ({
  logo,
  navigation,
  preview,
}: Pick<HeaderProps, 'logo' | 'navigation' | 'preview'>) => {
  const dispatch = useDispatch();
  const OpenNavBtnRef = useRef();

  return (
    <HeaderStyles>
      <MaxPageWidth as="nav">
        <HeaderLogo logo={logo} preview={preview} />
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
        <button
          type="button"
          aria-label="Open mobile navigation"
          ref={OpenNavBtnRef}
          onClick={() => dispatch(openMobileNav())}
        >
          <RiMenuLine />
        </button>
      </MaxPageWidth>
    </HeaderStyles>
  );
};
