import styled from '@emotion/styled';

const unit = 'px';
const minWidth = 320;
const maxWidth = 1400;

export type HeadingProps = {
  // Heading type
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

  // Font sizes
  min: number;
  max: number;

  // Margin
  mt?: number;
  mr?: number;
  mb?: number;
  ml?: number;

  // Padding
  pt?: number;
  pr?: number;
  pb?: number;
  pl?: number;
};

export const Heading = styled.div<HeadingProps>`
  font-size: ${(props) =>
    props.min &&
    `${`calc(${props.min}${unit} + (${props.max} - ${props.min}) * ((100vw - ${minWidth}${unit}) / (${maxWidth} - ${minWidth})))`}`};

  ${(props) => props.mt && `margin-top: ${props.mt && props.mt / props.max}em;`}
  ${(props) =>
    props.mr && `margin-right: ${props.mr && props.mr / props.max}em;`}
  ${(props) =>
    props.mb && `margin-bottom: ${props.mb && props.mb / props.max}em;`}
  ${(props) =>
    props.ml && `margin-left: ${props.ml && props.ml / props.max}em;`}

  ${(props) =>
    props.pt && `padding-top: ${props.pt && props.pt / props.max}em;`}
  ${(props) =>
    props.pr && `padding-right: ${props.pr && props.pr / props.max}em;`}
  ${(props) =>
    props.pb && `padding-bottom: ${props.pb && props.pb / props.max}em;`}
  ${(props) =>
    props.pl && `padding-left: ${props.pl && props.pl / props.max}em;`}
`;
