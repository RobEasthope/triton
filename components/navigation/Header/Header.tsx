import { Header as rawHeaderProps } from 'types/sanity-schema';

import {
  ExternalLinkWithTitleProp,
  InternalLinkWithTitleProp,
} from 'types/links';
import { MaxPageWidth } from 'components/utils/styles/MaxPageWidth/MaxPageWidth';

import { PaddedComponent } from 'components/utils/styles/PaddedComponent/PaddedComponent';
import { SuperLink } from '../../utils/links/SuperLink/SuperLink';
import { HeaderLayout, LargeNavigation } from './Header.styles';
import { HeaderLogo } from './components/HeaderLogo/HeaderLogo';
import { SmallNavigation } from '../SmallNavigation/SmallNavigation';

export interface HeaderProps extends rawHeaderProps {
  navigation?: [ExternalLinkWithTitleProp, InternalLinkWithTitleProp];
  preview: boolean;
}

export const Header = ({
  logo,
  navigation,
  preview,
}: Pick<HeaderProps, 'logo' | 'navigation' | 'preview'>) => (
  <>
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

          <SmallNavigation navigation={navigation} />
        </HeaderLayout>
      </MaxPageWidth>
    </PaddedComponent>
  </>
);
