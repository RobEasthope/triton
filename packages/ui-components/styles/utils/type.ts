import { MAX_WIDTH } from '@/UI/styles/constants/MAX_WIDTHS';
import { TypeProps, TypeReturnProps } from '@/UI/types/utils';

export const type = ({
  fontSize,
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
  // Minimum font fontSize
  fontSize: `${fontSize.MIN}px`,

  // Dynamic font fontSize
  '@pageMinWidth': {
    fontSize: `calc(${fontSize.MIN}px + (${fontSize.MAX} - ${fontSize.MIN}) * ((100vw - ${MAX_WIDTH.PAGE_MIN}px) / (${MAX_WIDTH.PAGE_MAX} - ${MAX_WIDTH.PAGE_MIN})))`,
  },

  // Maximum font fontSize
  '@pageMaxWidth': {
    fontSize: `${fontSize.MAX}px`,
  },

  // Margin
  marginTop: `${mt ? `${mt / fontSize.MAX}em` : null}`,
  marginBottom: `${mb ? `${mb / fontSize.MAX}em` : null}`,
  marginLeft: `${ml ? `${ml / fontSize.MAX}em` : null}`,
  marginRight: `${mr ? `${mr / fontSize.MAX}em` : null}`,
  marginX: `${mx ? `${mx / fontSize.MAX}em` : null}`,
  marginY: `${my ? `${my / fontSize.MAX}em` : null}`,

  // Padding
  paddingTop: `${pt ? `${pt / fontSize.MAX}em` : null}`,
  paddingBottom: `${pb ? `${pb / fontSize.MAX}em` : null}`,
  paddingLeft: `${pl ? `${pl / fontSize.MAX}em` : null}`,
  paddingRight: `${pr ? `${pr / fontSize.MAX}em` : null}`,
  paddingX: `${px ? `${px / fontSize.MAX}em` : null}`,
  paddingY: `${py ? `${py / fontSize.MAX}em` : null}`,
});
