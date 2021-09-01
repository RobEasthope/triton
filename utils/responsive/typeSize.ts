export const typeSize = ({ min, max }: { min: number; max: number }) => {
  const minWidth = 320;
  const maxWidth = 1200;
  const unit = 'px';
  return {
    fontSize: `${min}px`,

    '@bp1': {
      // fontSize: `${`calc(${min}${unit} + (${max} - ${min}) * ((100vw - ${minWidth}${unit}) / (${maxWidth} - ${minWidth})))`}`,
      fontSize: `calc(${max}${unit})`,
    },
  };
};
