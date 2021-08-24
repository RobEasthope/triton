import { Header as rawHeaderProps } from 'settings/types/sanity-schema';
import {
  ImageAssetProp,
  Picture,
} from 'components/utils/media/Picture/Picture';
import {
  ExternalLinkWithTitleProp,
  InternalLinkWithTitleProp,
} from 'settings/types/links';
import styled from '@emotion/styled';
import { openMobileNav } from 'components/navigation/MobileNav/mobileNav.slice';
import { useDispatch } from 'react-redux';
import { useRef } from 'react';
import { RiMenuLine } from 'react-icons/ri';
import { SuperLink } from '../raw-links/SuperLink/SuperLink';
import { HeaderStyles } from './Header.styles';

export interface HeaderProps extends rawHeaderProps {
  navigation?: [ExternalLinkWithTitleProp, InternalLinkWithTitleProp];
  preview: boolean;
}

const HeaderLogo = styled.div`
  position: relative;
  width: 32px;
  height: 32px;
`;

export const Header = ({
  logo,
  navigation,
  preview,
}: Pick<HeaderProps, 'logo' | 'navigation' | 'preview'>) => {
  const dispatch = useDispatch();
  const OpenNavBtnRef = useRef();

  return (
    <HeaderStyles>
      <div>
        <HeaderLogo>
          <Picture
            asset={logo as ImageAssetProp}
            mode="contain"
            maxWidth={32}
            preview={preview}
          />
        </HeaderLogo>
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
      </div>
    </Header>
  );
};
