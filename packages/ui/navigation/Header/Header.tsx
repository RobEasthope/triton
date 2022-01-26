import Link from 'next/link';
import { Header as rawHeaderProps } from '@/UI/types/sanity-schema';
import { styled } from '@/UI/styles/stitches.config';
import { MaxPageWidth } from '@/UI/base/layout/MaxPageWidth/MaxPageWidth';
import { PaddedComponent } from '@/UI/base/layout/PaddedComponent/PaddedComponent';
import { Picture } from '@/UI/base/media/Picture/Picture';
import { SuperLink } from '@/UI/base/links/SuperLink/SuperLink';
import { SmallNavigation } from '@/UI/navigation/SmallNavigation/SmallNavigation';
import { ExternalLinkWithTitleSchemaProps } from '@/UI/base/links/ExternalLink/ExternalLink';
import { InternalLinkWithTitleSchemaProps } from '@/UI/base/links/InternalLink/InternalLink';

// Styles
export const HeaderLayout = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const StyledHomeLink = styled('span', {
  position: 'relative',
  display: 'inline-block',
  width: '32px',
  height: '32px',
});

export const LargeNavigation = styled('ul', {
  display: 'none',
  visibility: 'hidden',
  listStyle: 'none',

  '@media (min-width: 800px)': {
    display: 'flex',
    visibility: 'visible',
    gap: '1em',
  },

  '& li': {
    display: 'inline-block',
  },
});

// Types
export interface HeaderProps extends rawHeaderProps {
  navigation?: [
    ExternalLinkWithTitleSchemaProps,
    InternalLinkWithTitleSchemaProps
  ];
}

// Markup
export const Header = ({
  logo,
  navigation,
}: Pick<HeaderProps, 'logo' | 'navigation'>) => (
  <PaddedComponent as="header">
    <MaxPageWidth as="nav">
      <HeaderLayout as="div">
        <StyledHomeLink>
          <Link href="/">
            <a>
              <Picture asset={logo} mode="responsive" maxWidth={32} />
            </a>
          </Link>
        </StyledHomeLink>

        <LargeNavigation as="ul">
          {navigation &&
            navigation?.length > 0 &&
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
);
