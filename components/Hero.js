import { css, keyframes } from '@emotion/react';
import { typography } from '../styles/helpers';

const blink = keyframes`
  50% { opacity: 0.0; }
`;

const heroCss = css`
  min-height: 100vh;
  background-color: #f66;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const introductionCss = css`
  font-family: ${typography.fontSerif};
  font-size: 4rem;

  @media (max-width: 1024px) {
    font-size: 2.5rem;
  }

  @media (max-width: 767px) {
    font-size: 2.2rem;
  }
`;

const headingTitleCss = css`
  font-size: 9rem;
  font-weight: 800;
  color: #ffffff;
  margin-top: 30px;
  text-align: center;

  ::after {
    content: '|';
    animation: ${blink} 1s ease infinite;
  }

  @media (max-width: 1024px) {
    font-size: 7rem;
  }

  @media (max-width: 767px) {
    font-size: 4rem;
  }
`;

function Hero() {
  return (
    <section css={heroCss}>
      <div css={introductionCss}>I'm Jenia Brook.</div>
      <h1 css={headingTitleCss}>Frontend engineer.</h1>
    </section>
  );
}

export default Hero;
