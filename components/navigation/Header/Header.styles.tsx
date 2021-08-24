import styled from '@emotion/styled';
import { theme } from 'settings/theme/theme';
import { PaddedComponent } from 'components/utils/styles/PaddedComponent';

export const HeaderStyles = styled(PaddedComponent)`
  .layout {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .navigation {
    display: none;
    visibility: hidden;

    @media (min-width: ${theme.breakpoints.md}) {
      display: flex;
      visibility: visible;
      gap: 1em;
    }
    list-style: none;

    li {
      display: inline-block;
    }
  }

  .mobile-nav-btn {
    @media (min-width: ${theme.breakpoints.md}) {
      display: none;
      visibility: hidden;
    }
  }
`;
