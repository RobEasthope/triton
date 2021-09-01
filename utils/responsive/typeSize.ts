type TypeSizeProps = {
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

export const typeSize = ({
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
}: TypeSizeProps) => {
  const minWidth = 320;
  const maxWidth = 1200;
  const unit = 'px';

  return {
    // Font size
    fontSize: `${min}${unit}`,
    '@bp1': {
      fontSize: `calc(${min}${unit} + (${max} - ${min}) * ((100vw - ${minWidth}${unit}) / (${maxWidth} - ${minWidth})))`,
    },
    '@bp2': {
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
