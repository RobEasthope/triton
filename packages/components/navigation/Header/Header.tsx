import { Header as rawHeaderProps } from 'types/sanity-schema';

import {
  ExternalLinkWithTitleProp,
  InternalLinkWithTitleProp,
} from 'types/links';
import { MaxPageWidth } from 'base/styles/MaxPageWidth/MaxPageWidth';

import { PaddedComponent } from 'base/styles/PaddedComponent/PaddedComponent';
import { Picture } from 'base/media/Picture/Picture';
import { SuperLink } from 'base/links/SuperLink/SuperLink';
import { SmallNavigation } from 'navigation/SmallNavigation/SmallNavigation';
import { HeaderLayout, LargeNavigation, StyledHomeLink } from './Header.styles';

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
        <HeaderLayout as="div">
          <StyledHomeLink>
            <Picture
              asset={logo}
              mode="contain"
              maxWidth={32}
              preview={preview}
            />
          </StyledHomeLink>

          <LargeNavigation as="ul">
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
