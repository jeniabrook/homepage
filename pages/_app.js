import { Global } from '@emotion/react';
import { globalCss } from '../styles/global';
import '../styles/global.css';

import localFont from '@next/font/local';

const rubikFont = localFont({ src: '../public/font/Rubik.woff2' });

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={`${rubikFont.className} flex flex-col gap-[110px]`}>
      <Global styles={globalCss} />
      <Component {...pageProps} />
    </main>
  );
}
