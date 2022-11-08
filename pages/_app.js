import { Global, css } from '@emotion/react';
import { globalCss } from '../styles/global';

import localFont from '@next/font/local';

const rubikFont = localFont({ src: '../public/font/Rubik.woff2' });

const mainCss = css`
  display: flex;
  flex-direction: column;
  row-gap: 110px;
`;

export default function MyApp({ Component, pageProps }) {
  return (
    <main css={mainCss} className={rubikFont.className}>
      <Global styles={globalCss} />
      <Component {...pageProps} />
    </main>
  );
}
