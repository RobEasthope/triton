import { createStitches } from '@stitches/react';
import { TypeProps, TypeReturnProps } from 'types/utils';

const minWidth = 320;
const maxWidth = 1200;

export const { css, styled, globalCss, getCssText } = createStitches({
  theme: {
    colors: {
      hiContrast: 'hsl(206,10%,5%)',
      loContrast: 'white',

      gray100: 'hsl(206,22%,99%)',
      gray200: 'hsl(206,12%,97%)',
      gray300: 'hsl(206,11%,92%)',
      gray400: 'hsl(206,10%,84%)',
      gray500: 'hsl(206,10%,76%)',
      gray600: 'hsl(206,10%,44%)',

      purple100: 'hsl(252,100%,99%)',
      purple200: 'hsl(252,100%,98%)',
      purple300: 'hsl(252,100%,94%)',
      purple400: 'hsl(252,75%,84%)',
      purple500: 'hsl(252,78%,60%)',
      purple600: 'hsl(252,80%,53%)',
    },
    space: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '35px',
    },
    sizes: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '35px',
    },
    fontSizes: {
      1: '12px',
      2: '13px',
      3: '15px',
      4: '17px',
      5: '19px',
      6: '21px',
    },
    fonts: {
      system: 'system-ui',
    },
  },
  utils: {
    marginX: (value: string) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginY: (value: string) => ({
      marginTop: value,
      marginBottom: value,
    }),
    paddingX: (value: string) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (value: string) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    type: ({
      min,
      max,
      mt,
      mr,
      mb,
      ml,
      mx,
      my,
      pt,
      pr,
      pb,
      pl,
      px,
      py,
    }: TypeProps): TypeReturnProps => ({
      // Minimum font size
      fontSize: `${min}px`,

      // Dynamic font size
      '@minWidth': {
        fontSize: `calc(${min}px + (${max} - ${min}) * ((100vw - ${minWidth}px) / (${maxWidth} - ${minWidth})))`,
      },

      // Maximum font size
      '@maxWidth': {
        fontSize: `${max}px`,
      },

      // Margin
      marginTop: `${mt ? `${mt / max}em` : null}`,
      marginBottom: `${mb ? `${mb / max}em` : null}`,
      marginLeft: `${ml ? `${ml / max}em` : null}`,
      marginRight: `${mr ? `${mr / max}em` : null}`,
      marginX: `${mx ? `${mx / max}em` : null}`,
      marginY: `${my ? `${my / max}em` : null}`,

      // Padding
      paddingTop: `${pt ? `${pt / max}em` : null}`,
      paddingBottom: `${pb ? `${pb / max}em` : null}`,
      paddingLeft: `${pl ? `${pl / max}em` : null}`,
      paddingRight: `${pr ? `${pr / max}em` : null}`,
      paddingX: `${px ? `${px / max}em` : null}`,
      paddingY: `${py ? `${py / max}em` : null}`,
    }),
  },
  media: {
    bp1: '(min-width: 320px)',
    bp2: '(min-width: 1200px)',
    minWidth: '(min-width: 320px)',
    maxWidth: '(min-width: 1200px)',
  },
});
