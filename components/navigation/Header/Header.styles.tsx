import { styled } from 'stitches.config';

export const HeaderLayout = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
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
