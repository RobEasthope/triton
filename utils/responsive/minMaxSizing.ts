import { RESPONSIVE } from '../../constants/responsive';

type PropTypes = {
  css: string;
  min: number;
  max: number;
  unit?: string;
  minWidth?: number;
  maxWidth?: number;
};

export function minMaxSizing(props: PropTypes) {
  const {
    css,
    min,
    max,
    unit = 'px',
    minWidth = RESPONSIVE.MIN_DEFAULT_SIZE,
    maxWidth = RESPONSIVE.MAX_DEFAULT_SIZE,
  } = props;

  return `
    ${css}: ${min}${unit};
    @media (min-width: ${minWidth}px) {
      ${css}: calc(${min}${unit} + (${max} - ${min}) * ((100vw - ${minWidth}${unit}) / (${maxWidth} - ${minWidth})));
    };
    
    @media (min-width: ${maxWidth}px) {
      ${css}: ${max}${unit};
    }
  `;
}
