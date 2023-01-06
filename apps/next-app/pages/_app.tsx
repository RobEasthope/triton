import type { AppProps } from "next/app";

// Sanitize CSS
import "sanitize.css";
import "sanitize.css/forms.css";
import "sanitize.css/assets.css";
import "sanitize.css/typography.css";
import "sanitize.css/reduce-motion.css";
import "sanitize.css/system-ui.css";

// Tailwind CSS
import "styles/tailwind-globals.css";

// Picture
import "ui-pkg/base/Picture/Picture.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
