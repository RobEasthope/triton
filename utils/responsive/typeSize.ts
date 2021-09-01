export const typeSize = ({ min, max }: { min: number; max: number }) => {
  const minWidth = 320;
  const maxWidth = 1200;
  const unit = 'px';
  return {
    fontSize: `${min}${unit}`,

    '@bp1': {
      // fontSize: `${`calc(${min}${unit} + (${max} - ${min}) * ((100vw - ${minWidth}${unit}) / (${maxWidth} - ${minWidth})))`}`,
      fontSize: `calc(${min}${unit} + (${max} - ${min}) * ((100vw - ${minWidth}${unit}) / (${maxWidth} - ${minWidth})))`,
      // fontSize: 'calc(32px + (64 - 32) * ((100vw - 320px) / (1400 - 320)))',
    },

    '@bp2': {
      fontSize: `${max}${unit}`,
    },
  };
};
