import { css, Global } from '@emotion/react';

export const globalStorybookStyles = (
  <Global
    styles={css`
      html,
      body,
      #root {
        height: 100%;
      }
    `}
  />
);
