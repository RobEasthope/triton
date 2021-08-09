import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ReactNode } from 'react';

function MyApp({ Component, pageProps }: AppProps): ReactNode {
  return <Component {...pageProps} />;
}
export default MyApp;
