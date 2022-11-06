import { Global } from '@emotion/react';
import { globalCss } from '../styles/global';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global styles={globalCss} />
      <Component {...pageProps} />
    </>
  );
}
