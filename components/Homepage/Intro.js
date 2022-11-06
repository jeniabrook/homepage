import Image from 'next/image';
import { css } from '@emotion/react';
import Container from '../Container';
import profilePic from '../../public/me.jpg';

const introCss = css`
  min-height: 100vh;
  height: 100vh;
`;

const containerCss = css`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const imageCss = css`
  border-radius: 50%;
`;

function Intro() {
  return (
    <section css={introCss}>
      <Container css={containerCss}>
        <Image
          css={imageCss}
          src={profilePic}
          alt="Picture of Jenia Brook"
          placeholder="blur"
          width={128}
          height={128}
        />
        <h1>Jenia Brook</h1>
        <p>I'm a Frontend engineer</p>
      </Container>
    </section>
  );
}

export default Intro;
