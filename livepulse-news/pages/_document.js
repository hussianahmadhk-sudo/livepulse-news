import Document, { Html, Head, Main, NextScript } from "next/document"

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="description" content="LivePulse News - Real Stories, Real Time. Latest India, World, Sports & Bollywood news updates." />
          <meta name="keywords" content="India news, world news, sports news, bollywood updates, livepulse news" />
          <meta name="author" content="LivePulse News" />
          <meta property="og:title" content="LivePulse News" />
          <meta property="og:description" content="Latest headlines from India, World, Sports & Bollywood." />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          {/* Add your AdSense script here AFTER approval:
            <script data-ad-client="ca-pub-XXXXXXXXXXXX" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
          */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
