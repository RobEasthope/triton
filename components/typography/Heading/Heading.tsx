import { Heading as ChakraHeading } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const Heading = styled(ChakraHeading)<{
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}>`
  font-size: clamp(1rem, 12rem, 12rem);
`;
