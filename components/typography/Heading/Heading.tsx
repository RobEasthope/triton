import styled from '@emotion/styled';

const unit = 'px';
const minWidth = 320;
const maxWidth = 1400;

export const Heading = styled.div<{
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  min: number;
  max: number;
  mt?: number;
  mr?: number;
  mb?: number;
  ml?: number;
}>`
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
`;
