import { css } from '@emotion/react';

/**
 * woff2 - Super Modern Browsers
 * woff - Modern Browsers
 * ttf - Legacy Safari, Android, iOS (optional at this point)
 *
 * References:
 * - https://medium.com/clio-calliope/making-google-fonts-faster-aadf3c02a36d
 * - https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/webfont-optimization
 */
export const fontFacesCss = css`
  /* Montserrat-Light */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-display: swap;
    font-weight: 300;
    src: local('Montserrat-Light'),
      url('/fonts/montserrat/Montserrat-Light.woff2') format('woff2'),
      url('/fonts/montserrat/Montserrat-Light.woff') format('woff'),
      url('/fonts/montserrat/Montserrat-Light.ttf') format('truetype');
  }
`;
