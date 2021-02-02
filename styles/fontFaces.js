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

  /* Montserrat-Bold */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-display: swap;
    font-weight: 700;
    src: local('Montserrat-Bold'),
      url('/fonts/montserrat/Montserrat-Bold.woff2') format('woff2'),
      url('/fonts/montserrat/Montserrat-Bold.woff') format('woff'),
      url('/fonts/montserrat/Montserrat-Bold.ttf') format('truetype');
  }

  /* Montserrat-ExtraBold */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-display: swap;
    font-weight: 800;
    src: local('Montserrat-ExtraBold'),
      url('/fonts/montserrat/Montserrat-ExtraBold.woff2') format('woff2'),
      url('/fonts/montserrat/Montserrat-ExtraBold.woff') format('woff'),
      url('/fonts/montserrat/Montserrat-ExtraBold.ttf') format('truetype');
  }

  /* PlayfairDisplay-Medium */
  @font-face {
    font-family: 'Playfair Display';
    font-style: normal;
    font-display: swap;
    font-weight: 800;
    src: local('PlayfairDisplay-Medium'),
      url('/fonts/playfair-display/PlayfairDisplay-Medium.woff2')
        format('woff2'),
      url('/fonts/playfair-display/PlayfairDisplay-Medium.woff') format('woff'),
      url('/fonts/playfair-display/PlayfairDisplay-Medium.ttf')
        format('truetype');
  }
`;
