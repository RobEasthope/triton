import { MAX_WIDTH } from '@/UI/constants/MAX_WIDTHS';
import { TypeProps, TypeReturnProps } from '@/UI/types/utils';

export const type = ({ fontSize }: TypeProps): TypeReturnProps => ({
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
});
