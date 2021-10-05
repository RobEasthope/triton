import type { AppProps } from 'next/app';
import { ReactNode } from 'react';
import { globalStyles } from 'settings/styles/globalStyles';

function MyApp({ Component, pageProps }: AppProps): ReactNode {
  return (
    <>
      {globalStyles()}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
