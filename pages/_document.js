import Document, { Html, Head, Main, NextScript } from 'next/document';

/**
 * This component allows to augment the <html> and <body> tags.
 * Note: This is only rendered on the server, and only once.
 *
 * https://nextjs.org/docs/advanced-features/custom-document
 * https://github.com/zeit/next.js/blob/canary/packages/next/pages/_document.tsx
 */
function CustomDocument() {
  return (
    <Html lang="en">
      <Head>
        {/* Preloading important fonts in order to reduce text from reflowing. */}
        <link
          rel="preload"
          href="/fonts/playfair-display/PlayfairDisplay-Medium.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/montserrat/Montserrat-ExtraBold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

/**
 * Map static methods from `Document` since we don't use
 * `class MyDocument extends Document`
 */
CustomDocument.headTagsMiddleware = Document.headTagsMiddleware;
CustomDocument.bodyTagsMiddleware = Document.bodyTagsMiddleware;
CustomDocument.htmlPropsMiddleware = Document.htmlPropsMiddleware;
CustomDocument.renderDocument = Document.renderDocument;

export default CustomDocument;
