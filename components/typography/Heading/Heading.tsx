import { Heading as ChakraHeading } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { type } from 'utils/responsive/type';

export const Heading = styled.div<{
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}>`
  display: inline-block;
  ${type({ min: 16, max: 32, my: 64, px: 32, py: 32 })}
`;
