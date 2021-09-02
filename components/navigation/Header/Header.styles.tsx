import { styled } from 'stitches.config';
import { HomeLink } from 'components/utils/links/HomeLink/HomeLink';

export const HeaderLayout = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const StyledHomeLink = styled(HomeLink, {
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
