import { Header as rawHeaderProps } from 'settings/types/sanity-schema';

import {
  ExternalLinkWithTitleProp,
  InternalLinkWithTitleProp,
} from 'settings/types/links';
import { openMobileNav } from 'components/navigation/MobileNav/mobileNav.slice';
import { useDispatch } from 'react-redux';
import { useRef } from 'react';
import { RiMenuLine } from 'react-icons/ri';
import { SuperLink } from '../raw-links/SuperLink/SuperLink';
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
    <header>
      <nav>
        <HeaderLogo logo={logo} preview={preview} />

        <div>
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
        </div>
        <button
          type="button"
          aria-label="Open mobile navigation"
          ref={OpenNavBtnRef}
          onClick={() => dispatch(openMobileNav())}
        >
          <RiMenuLine />
        </button>
      </nav>
    </header>
  );
};
