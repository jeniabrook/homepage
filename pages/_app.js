import { Global } from '@emotion/react';

import { globalCss } from '../styles/global';
import { Fragment } from 'react';

export default function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Global styles={globalCss} />
      <Component {...pageProps} />
    </Fragment>
  );
}
