import { MAX_WIDTH } from '@/UI/constants/MAX_WIDTHS';
import { FullTypeProps, FullTypeReturnProps } from '@/UI/types/utils';

export const fullType = ({
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
}: FullTypeProps): FullTypeReturnProps => ({
  // Minimum font fontSize
  fontSize: `${fontSize.MIN}px`,

  // Dynamic font fontSize
  '@pageMinWidth': {
    fontSize: `calc(${fontSize.MIN}px + (${fontSize.MAX} - ${fontSize.MIN}) * ((100vw - ${MAX_WIDTH.TYPE_LOWER_LIMIT}px) / (${MAX_WIDTH.TYPE_UPPER_LIMIT} - ${MAX_WIDTH.TYPE_LOWER_LIMIT})))`,
  },

  // Maximum font fontSize
  '@pageMaxWidth': {
    fontSize: `${fontSize.MAX}px`,
  },

  // Margin
  marginTop: mt && `${mt / fontSize.MAX}em`,
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
