import { Global } from '@emotion/react';
import { Rubik } from '@next/font/google';
import { globalCss } from '../styles/global';

const rubik = Rubik({ weight: ['400', '500', '700'] });

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={rubik.className}>
      <Global styles={globalCss} />
      <Component {...pageProps} />
    </main>
  );
}
