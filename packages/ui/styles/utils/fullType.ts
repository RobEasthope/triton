import { MAX_WIDTH } from '@/UI/constants/MAX_WIDTHS';
import { FullTypeProps } from '@/UI/types/utils';

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
}: FullTypeProps) => ({
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
  marginBottom: mb && `${mb / fontSize.MAX}em`,
  marginLeft: ml && `${ml / fontSize.MAX}em`,
  marginRight: mr && `${mr / fontSize.MAX}em`,
  marginX: mx && `${mx / fontSize.MAX}em`,
  marginY: my && `${my / fontSize.MAX}em`,

  // Padding
  paddingTop: pt && `${pt / fontSize.MAX}em`,
  paddingBottom: pb && `${pb / fontSize.MAX}em`,
  paddingLeft: pl && `${pl / fontSize.MAX}em`,
  paddingRight: pr && `${pr / fontSize.MAX}em`,
  paddingX: px && `${px / fontSize.MAX}em`,
  paddingY: py && `${py / fontSize.MAX}em`,
});
