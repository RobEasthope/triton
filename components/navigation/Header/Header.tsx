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
import { SuperLink } from '../raw-links/SuperLink/SuperLink';

export interface HeaderProps extends rawHeaderProps {
  navigation?: [ExternalLinkWithTitleProp, InternalLinkWithTitleProp];
  preview: boolean;
}

const HeaderLogo = styled(Picture)`
  max-width: 32px;
`;

export const Header = ({
  logo,
  navigation,
  preview,
}: Pick<HeaderProps, 'logo' | 'navigation' | 'preview'>) => (
  <header>
    <nav>
      <div>
        <HeaderLogo
          asset={logo as ImageAssetProp}
          mode="contain"
          maxWidth={32}
          preview={preview}
        />
      </div>
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
    </nav>
  </header>
);
