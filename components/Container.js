import { css } from '@emotion/react';
import { mediaQuery } from '../styles/helpers';

const containerCss = css`
  width: 100%;
  padding-inline: 15px;
  margin: 0 auto;

  ${mediaQuery.sm} {
    max-width: 540px;
  }
  ${mediaQuery.md} {
    max-width: 920px;
  }
  ${mediaQuery.lg} {
    max-width: 1200px;
  }
`;

function Container({ children, className }) {
  return (
    <div css={containerCss} className={className}>
      {children}
    </div>
  );
}

export default Container;
