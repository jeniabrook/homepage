import { css } from '@emotion/react';

const heroCss = css`
  min-height: 100vh;
  background-color: #f66;
`;

function Hero() {
  return (
    <section css={heroCss}>
      <div>Hi</div>
    </section>
  );
}

export default Hero;
