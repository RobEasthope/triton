import { Heading as ChakraHeading } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const Heading = styled(ChakraHeading)<{
  as: 'h1' | 'h2' | 'h2' | 'h4' | 'h5' | 'h6';
}>`
  color: turquoise;
`;
