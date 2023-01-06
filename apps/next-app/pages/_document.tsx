import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="h-full">
      <Head>
        {/* Favicons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#b91d47" />
        <meta name="theme-color" content="#ffffff" />

        {/* Inter font import */}
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />

        {/* Adobe fonts */}
        <link rel="stylesheet" href="https://use.typekit.net/qjp7bat.css" />
      </Head>

      <body className="h-full">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
