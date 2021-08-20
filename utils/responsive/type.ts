import { minMaxSizing } from './minMaxSizing';
import { responsiveTypeSpacing } from './responsiveTypeSpacing';

type TypeProps = {
  min: number;
  max: number;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  pt?: number;
  pb?: number;
  pl?: number;
  pr?: number;
  minWidth?: number;
  maxWidth?: number;
};

export function type({
  min,
  max,
  mt,
  mb,
  ml,
  mr,
  pt,
  pb,
  pl,
  pr,
  minWidth,
  maxWidth,
}: TypeProps): string {
  return `
    ${minMaxSizing({ css: 'font-size', min, max, minWidth, maxWidth })}
    
    ${responsiveTypeSpacing({ css: 'margin-top', value: mt, max })}
    ${responsiveTypeSpacing({ css: 'margin-bottom', value: mb, max })}
    ${responsiveTypeSpacing({ css: 'margin-left', value: ml, max })}
    ${responsiveTypeSpacing({ css: 'margin-right', value: mr, max })}

    ${responsiveTypeSpacing({ css: 'padding-top', value: pt, max })}
    ${responsiveTypeSpacing({ css: 'padding-bottom', value: pb, max })}
    ${responsiveTypeSpacing({ css: 'padding-left', value: pl, max })}
    ${responsiveTypeSpacing({ css: 'padding-right', value: pr, max })}
  `;
}
