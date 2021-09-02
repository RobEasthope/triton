export type TypeProps = {
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

export type TypeReturnProps = {
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
