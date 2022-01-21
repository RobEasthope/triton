import type { AppProps } from 'next/app';
import { ReactNode } from 'react';
import { globalStyles } from '@/UI/styles/globalStyles';

// Sanitize CSS
import 'sanitize.css';
import 'sanitize.css/typography.css';
import 'sanitize.css/assets.css';
import 'sanitize.css/forms.css';
import 'sanitize.css/system-ui.css';
import 'sanitize.css/reduce-motion.css';

function MyApp({ Component, pageProps }: AppProps): ReactNode {
  return (
    <>
      {globalStyles()}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
