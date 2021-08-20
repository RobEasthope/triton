import { Heading as ChakraHeading } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { minMaxSizing } from 'utils/responsive/minMaxSizing';
import { responsiveTypeSpacing } from 'utils/responsive/responsiveTypeSpacing';
import { type } from 'utils/responsive/type';

const unit = 'px';
const minWidth = 320;
const maxWidth = 1400;

export const Heading = styled.div<{
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  min: number;
  max: number;
  mb?: number;
}>`
  font-size: ${(props) =>
    props.min &&
    `${`calc(${props.min}${unit} + (${props.max} - ${props.min}) * ((100vw - ${minWidth}${unit}) / (${maxWidth} - ${minWidth})))`}`};

  ${(props) =>
    props.mb && `margin-bottom: ${props.mb && props.mb / props.max}em;`}
`;
