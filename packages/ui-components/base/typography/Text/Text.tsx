import { SPACING } from '@/UI/constants/SPACING';
import { styled } from '@/UI/styles/stitches.config';

export const Text = styled('div', {
  variants: {
    typeSize: {
      // VR_BASE: 1.75rem (1rem * 1.75)
      jumbotron: {
        fontSize: '$jumbotron', // 4.209rem
        lineHeight: `calc(${SPACING.VR_BASE} * 3)`,
      },
      xxLarge: {
        fontSize: '$xxLarge', // 3.157rem
        lineHeight: `calc(${SPACING.VR_BASE} * 3)`,
      },
      xLarge: {
        fontSize: '$xLarge', // 2.369rem
        lineHeight: `calc(${SPACING.VR_BASE} * 2)`,
      },
      large: {
        fontSize: '$large', // 1.777rem
        lineHeight: `calc(${SPACING.VR_BASE} * 1.5)`,
      },
      medium: {
        fontSize: '$medium', // 1.333rem
        lineHeight: `calc(${SPACING.VR_BASE})`,
      },
      standard: {
        fontSize: '$base', // 1rem
        lineHeight: SPACING.VR_BASE,
      },
      small: {
        fontSize: '$small', // 0.75rem
        lineHeight: SPACING.VR_BASE,
      },
      tiny: {
        fontSize: '$tiny', // 0.5rem
        lineHeight: SPACING.VR_BASE,
      },
    },
    typeface: {
      sansSerif: {
        fontFamily: '$sansSerif',
      },
      serif: {
        fontFamily: '$serif',
      },
    },
    typeWeight: {
      regular: {
        fontWeight: 400,
      },
      medium: {
        fontWeight: 500,
        letterSpacing: '0.0.25em',
      },
      xBold: {
        fontWeight: 800,
        letterSpacing: '0.0.25em',
      },
    },
  },
  defaultVariants: {
    typeface: 'sansSerif',
    typeSize: 'standard',
    typeWeight: 'regular',
  },
});
