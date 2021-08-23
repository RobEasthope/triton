import { Header as rawHeaderProps } from 'types/sanity-schema';
import {
  ImageAssetProp,
  Picture,
} from 'components/utils/media/Picture/Picture';
import {
  ExternalLinkWithTitleProp,
  InternalLinkWithTitleProp,
} from 'types/links';
import styled from '@emotion/styled';
import { Button } from '@chakra-ui/react';
import { openMobileNav } from 'redux/slices/mobileNavSlice';
import { useDispatch } from 'react-redux';
import { SuperLink } from '../raw-links/SuperLink/SuperLink';
import { MobileNav } from '../MobileNav/MobileNav';

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

  return (
    <>
      <header>
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
            aria-label="Increment value"
            onClick={() => dispatch(openMobileNav())}
          >
            Nav
          </button>
        </div>
      </header>
      <MobileNav navigation={navigation} />
    </>
  );
};
