import styled from '@emotion/styled';

const unit = 'px';
const minWidth = 320;
const maxWidth = 1400;

export type RawHeadingProps = {
  // RawHeading type
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

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

export const RawHeading = styled.div<RawHeadingProps>`
  /* Font sizing */
  font-size: ${(props) => (props.min ? `${props.min}${unit}` : '1em')};

  @media (min-width: ${minWidth}px) {
    font-size: ${(props) =>
      props.min && props.max
        ? `${`calc(${props.min}${unit} + (${props.max} - ${props.min}) * ((100vw - ${minWidth}${unit}) / (${maxWidth} - ${minWidth})))`}`
        : 'font-size: 1em'};
  }

  @media (min-width: ${maxWidth}px) {
    font-size: ${(props) => (props.max ? `${props.max}${unit}` : '1em')};
  }

  /* Single margin */
  ${(props) => props.mt && `margin-top: ${props.mt && props.mt / props.max}em;`}
  ${(props) =>
    props.mr && `margin-right: ${props.mr && props.mr / props.max}em;`}
  ${(props) =>
    props.mb && `margin-bottom: ${props.mb && props.mb / props.max}em;`}
  ${(props) =>
    props.ml && `margin-left: ${props.ml && props.ml / props.max}em;`}

  /* Combo margins */
  ${(props) =>
    props.my &&
    `margin-top: ${props.my && props.my / props.max}em;
    margin-bottom: ${props.my && props.my / props.max}em;`}
  ${(props) =>
    props.mx &&
    `margin-left: ${props.mx && props.mx / props.max}em;
    margin-right: ${props.mx && props.mx / props.max}em;`}

  /* Single padding */
  ${(props) =>
    props.pt && `padding-top: ${props.pt && props.pt / props.max}em;`}
  ${(props) =>
    props.pr && `padding-right: ${props.pr && props.pr / props.max}em;`}
  ${(props) =>
    props.pb && `padding-bottom: ${props.pb && props.pb / props.max}em;`}
  ${(props) =>
    props.pl && `padding-left: ${props.pl && props.pl / props.max}em;`}

  /* Combo padding */
  ${(props) =>
    props.py &&
    `padding-top: ${props.py && props.py / props.max}em;
    padding-bottom: ${props.py && props.py / props.max}em;`}
  ${(props) =>
    props.px &&
    `padding-left: ${props.px && props.px / props.max}em;
  padding-right: ${props.px && props.px / props.max}em;`}
`;
