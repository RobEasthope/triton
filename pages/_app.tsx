import type { AppProps } from 'next/app';
import { ReactNode } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from 'settings/theme/theme';
import { globalStyles } from 'settings/styles/globalStyles';
import { Provider } from 'react-redux';
import store from 'redux/store';

function MyApp({ Component, pageProps }: AppProps): ReactNode {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        {globalStyles}
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
