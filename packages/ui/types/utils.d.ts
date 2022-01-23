export type TypeProps = {
  // Font sizes
  fontSize: { MIN: number; MAX: number };
};

export type TypeReturnProps = {
  // Font sizes
  fontSize: string;
  '@pageMinWidth': { fontSize: string };
  '@pageMaxWidth': { fontSize: string };
};
export type FullTypeProps = {
  // Font sizes
  fontSize: { MIN: number; MAX: number };

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

export type FullTypeReturnProps = {
  // Font sizes
  fontSize: string;
  '@pageMinWidth': { fontSize: string };
  '@pageMaxWidth': { fontSize: string };

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

export type SizeProps = {
  // CSS class
  selector:
    | 'marginTop'
    | 'marginRight'
    | 'marginBottom'
    | 'marginLeft'
    | 'marginX'
    | 'marginY'
    | 'paddingTop'
    | 'paddingRight'
    | 'paddingBottom'
    | 'paddingLeft'
    | 'paddingX'
    | 'paddingY'
    | 'gap';

  // sizes
  min: number;
  max: number;
};

export type SizeReturnProps =
  // Margin
  | {
      marginTop: string;
      '@pageMinWidth': { marginTop: string };
      '@pageMaxWidth': { marginTop: string };
    }
  | {
      marginRight: string;
      '@pageMinWidth': { marginRight: string };
      '@pageMaxWidth': { marginRight: string };
    }
  | {
      marginBottom: string;
      '@pageMinWidth': { marginBottom: string };
      '@pageMaxWidth': { marginBottom: string };
    }
  | {
      marginLeft: string;
      '@pageMinWidth': { marginLeft: string };
      '@pageMaxWidth': { marginLeft: string };
    }
  | {
      marginLeft: string;
      marginRight: string;
      '@pageMinWidth': { marginLeft: string; marginRight: string };
      '@pageMaxWidth': { marginLeft: string; marginRight: string };
    }
  | {
      marginTop: string;
      marginBottom: string;
      '@pageMinWidth': { marginTop: string; marginBottom: string };
      '@pageMaxWidth': { marginTop: string; marginBottom: string };
    }
  // Padding
  | {
      paddingTop: string;
      '@pageMinWidth': { paddingTop: string };
      '@pageMaxWidth': { paddingTop: string };
    }
  | {
      paddingRight: string;
      '@pageMinWidth': { paddingRight: string };
      '@pageMaxWidth': { paddingRight: string };
    }
  | {
      paddingBottom: string;
      '@pageMinWidth': { paddingBottom: string };
      '@pageMaxWidth': { paddingBottom: string };
    }
  | {
      paddingLeft: string;
      '@pageMinWidth': { paddingLeft: string };
      '@pageMaxWidth': { paddingLeft: string };
    }
  | {
      paddingLeft: string;
      paddingRight: string;
      '@pageMinWidth': { paddingLeft: string; paddingRight: string };
      '@pageMaxWidth': { paddingLeft: string; paddingRight: string };
    }
  | {
      paddingTop: string;
      paddingBottom: string;
      '@pageMinWidth': { paddingTop: string; paddingBottom: string };
      '@pageMaxWidth': { paddingTop: string; paddingBottom: string };
    }
  // Gap
  | {
      gap: string;
      '@pageMinWidth': { gap: string };
      '@pageMaxWidth': { gap: string };
    }
  | null;
