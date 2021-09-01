type TypeProps = {
  // Font sizes
  min: number;
  max: number;

  // Margin
  mt?: number;
  mr?: number;
  mb?: number;
  ml?: number;
  mx?: number;
  my?: number;

  // Padding
  pt?: number;
  pr?: number;
  pb?: number;
  pl?: number;
  px?: number;
  py?: number;
};

type TypeReturnProps = {
  // Font sizes
  fontSize: string;
  '@minWidth': { fontSize: string };
  '@maxWidth': { fontSize: string };

  // Margin
  marginTop?: string;
  marginRight?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginX?: string;
  marginY?: string;

  // Padding
  paddingTop?: string;
  paddingRight?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  paddingX?: string;
  paddingY?: string;
};

export const type = ({
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
}: TypeProps): TypeReturnProps => {
  const minWidth = 320;
  const maxWidth = 1200;
  const unit = 'px';

  return {
    // Font size
    fontSize: `${min}${unit}`,
    '@minWidth': {
      fontSize: `calc(${min}${unit} + (${max} - ${min}) * ((100vw - ${minWidth}${unit}) / (${maxWidth} - ${minWidth})))`,
    },
    '@maxWidth': {
      fontSize: `${max}${unit}`,
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
  };
};
