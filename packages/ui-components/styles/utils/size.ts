import { MAX_WIDTH } from '@/UI/styles/constants/MAX_WIDTHS';
import { SizeProps, SizeReturnProps } from '@/UI/types/utils';

export const size = ({ selector, min, max }: SizeProps): SizeReturnProps => {
  switch (selector) {
    case 'marginTop':
      return {
        // Minimum size
        marginTop: `${min}px`,

        // Dynamic size
        '@pageMinWidth': {
          marginTop: `calc(${min}px + (${max} - ${min}) * ((100vw - ${MAX_WIDTH.PAGE_MIN}px) / (${MAX_WIDTH.PAGE_MAX} - ${MAX_WIDTH.PAGE_MIN})))`,
        },

        // Maximum size
        '@pageMaxWidth': {
          marginTop: `${max}px`,
        },
      };

    case 'marginRight':
      return {
        // Minimum size
        marginRight: `${min}px`,

        // Dynamic size
        '@pageMinWidth': {
          marginRight: `calc(${min}px + (${max} - ${min}) * ((100vw - ${MAX_WIDTH.PAGE_MIN}px) / (${MAX_WIDTH.PAGE_MAX} - ${MAX_WIDTH.PAGE_MIN})))`,
        },

        // Maximum size
        '@pageMaxWidth': {
          marginRight: `${max}px`,
        },
      };

    case 'marginBottom':
      return {
        // Minimum size
        marginBottom: `${min}px`,

        // Dynamic size
        '@pageMinWidth': {
          marginBottom: `calc(${min}px + (${max} - ${min}) * ((100vw - ${MAX_WIDTH.PAGE_MIN}px) / (${MAX_WIDTH.PAGE_MAX} - ${MAX_WIDTH.PAGE_MIN})))`,
        },

        // Maximum size
        '@pageMaxWidth': {
          marginBottom: `${max}px`,
        },
      };

    case 'marginLeft':
      return {
        // Minimum size
        marginLeft: `${min}px`,

        // Dynamic size
        '@pageMinWidth': {
          marginLeft: `calc(${min}px + (${max} - ${min}) * ((100vw - ${MAX_WIDTH.PAGE_MIN}px) / (${MAX_WIDTH.PAGE_MAX} - ${MAX_WIDTH.PAGE_MIN})))`,
        },

        // Maximum size
        '@pageMaxWidth': {
          marginLeft: `${max}px`,
        },
      };

    case 'marginX':
      return {
        // Minimum size
        marginLeft: `${min}px`,
        marginRight: `${min}px`,

        // Dynamic size
        '@pageMinWidth': {
          marginLeft: `calc(${min}px + (${max} - ${min}) * ((100vw - ${MAX_WIDTH.PAGE_MIN}px) / (${MAX_WIDTH.PAGE_MAX} - ${MAX_WIDTH.PAGE_MIN})))`,
          marginRight: `calc(${min}px + (${max} - ${min}) * ((100vw - ${MAX_WIDTH.PAGE_MIN}px) / (${MAX_WIDTH.PAGE_MAX} - ${MAX_WIDTH.PAGE_MIN})))`,
        },

        // Maximum size
        '@pageMaxWidth': {
          marginLeft: `${max}px`,
          marginRight: `${max}px`,
        },
      };

    case 'marginY':
      return {
        // Minimum size
        marginTop: `${min}px`,
        marginBottom: `${min}px`,

        // Dynamic size
        '@pageMinWidth': {
          marginTop: `calc(${min}px + (${max} - ${min}) * ((100vw - ${MAX_WIDTH.PAGE_MIN}px) / (${MAX_WIDTH.PAGE_MAX} - ${MAX_WIDTH.PAGE_MIN})))`,
          marginBottom: `calc(${min}px + (${max} - ${min}) * ((100vw - ${MAX_WIDTH.PAGE_MIN}px) / (${MAX_WIDTH.PAGE_MAX} - ${MAX_WIDTH.PAGE_MIN})))`,
        },

        // Maximum size
        '@pageMaxWidth': {
          marginTop: `${max}px`,
          marginBottom: `${max}px`,
        },
      };

    case 'paddingTop':
      return {
        // Minimum size
        paddingTop: `${min}px`,

        // Dynamic size
        '@pageMinWidth': {
          paddingTop: `calc(${min}px + (${max} - ${min}) * ((100vw - ${MAX_WIDTH.PAGE_MIN}px) / (${MAX_WIDTH.PAGE_MAX} - ${MAX_WIDTH.PAGE_MIN})))`,
        },

        // Maximum size
        '@pageMaxWidth': {
          paddingTop: `${max}px`,
        },
      };

    case 'paddingRight':
      return {
        // Minimum size
        paddingRight: `${min}px`,

        // Dynamic size
        '@pageMinWidth': {
          paddingRight: `calc(${min}px + (${max} - ${min}) * ((100vw - ${MAX_WIDTH.PAGE_MIN}px) / (${MAX_WIDTH.PAGE_MAX} - ${MAX_WIDTH.PAGE_MIN})))`,
        },

        // Maximum size
        '@pageMaxWidth': {
          paddingRight: `${max}px`,
        },
      };

    case 'paddingBottom':
      return {
        // Minimum size
        paddingBottom: `${min}px`,

        // Dynamic size
        '@pageMinWidth': {
          paddingBottom: `calc(${min}px + (${max} - ${min}) * ((100vw - ${MAX_WIDTH.PAGE_MIN}px) / (${MAX_WIDTH.PAGE_MAX} - ${MAX_WIDTH.PAGE_MIN})))`,
        },

        // Maximum size
        '@pageMaxWidth': {
          paddingBottom: `${max}px`,
        },
      };

    case 'paddingLeft':
      return {
        // Minimum size
        paddingLeft: `${min}px`,

        // Dynamic size
        '@pageMinWidth': {
          paddingLeft: `calc(${min}px + (${max} - ${min}) * ((100vw - ${MAX_WIDTH.PAGE_MIN}px) / (${MAX_WIDTH.PAGE_MAX} - ${MAX_WIDTH.PAGE_MIN})))`,
        },

        // Maximum size
        '@pageMaxWidth': {
          paddingLeft: `${max}px`,
        },
      };

    case 'paddingX':
      return {
        // Minimum size
        paddingLeft: `${min}px`,
        paddingRight: `${min}px`,

        // Dynamic size
        '@pageMinWidth': {
          paddingLeft: `calc(${min}px + (${max} - ${min}) * ((100vw - ${MAX_WIDTH.PAGE_MIN}px) / (${MAX_WIDTH.PAGE_MAX} - ${MAX_WIDTH.PAGE_MIN})))`,
          paddingRight: `calc(${min}px + (${max} - ${min}) * ((100vw - ${MAX_WIDTH.PAGE_MIN}px) / (${MAX_WIDTH.PAGE_MAX} - ${MAX_WIDTH.PAGE_MIN})))`,
        },

        // Maximum size
        '@pageMaxWidth': {
          paddingLeft: `${max}px`,
          paddingRight: `${max}px`,
        },
      };

    case 'paddingY':
      return {
        // Minimum size
        paddingTop: `${min}px`,
        paddingBottom: `${min}px`,

        // Dynamic size
        '@pageMinWidth': {
          paddingTop: `calc(${min}px + (${max} - ${min}) * ((100vw - ${MAX_WIDTH.PAGE_MIN}px) / (${MAX_WIDTH.PAGE_MAX} - ${MAX_WIDTH.PAGE_MIN})))`,
          paddingBottom: `calc(${min}px + (${max} - ${min}) * ((100vw - ${MAX_WIDTH.PAGE_MIN}px) / (${MAX_WIDTH.PAGE_MAX} - ${MAX_WIDTH.PAGE_MIN})))`,
        },

        // Maximum size
        '@pageMaxWidth': {
          paddingTop: `${max}px`,
          paddingBottom: `${max}px`,
        },
      };

    case 'gap':
      return {
        // Minimum size
        gap: `${min}px`,

        // Dynamic size
        '@pageMinWidth': {
          gap: `calc(${min}px + (${max} - ${min}) * ((100vw - ${MAX_WIDTH.PAGE_MIN}px) / (${MAX_WIDTH.PAGE_MAX} - ${MAX_WIDTH.PAGE_MIN})))`,
        },

        // Maximum size
        '@pageMaxWidth': {
          gap: `${max}px`,
        },
      };

    default:
      return null;
  }
};
