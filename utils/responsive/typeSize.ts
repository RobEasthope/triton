type TypeSizeProps = {
  min: number;
  max: number;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
};

export const typeSize = ({ min, max, mt, mb, ml, mr }: TypeSizeProps) => {
  const minWidth = 320;
  const maxWidth = 1200;
  const unit = 'px';

  return {
    // Font sizing
    fontSize: `${min}${unit}`,
    '@bp1': {
      fontSize: `calc(${min}${unit} + (${max} - ${min}) * ((100vw - ${minWidth}${unit}) / (${maxWidth} - ${minWidth})))`,
    },
    '@bp2': {
      fontSize: `${max}${unit}`,
    },

    // Margins
    marginTop: `${mt ? `${mt / max}em` : null}`,
    marginBottom: `${mb ? `${mb / max}em` : null}`,
    marginLeft: `${ml ? `${ml / max}em` : null}`,
    marginRight: `${mr ? `${mr / max}em` : null}`,
  };
};
