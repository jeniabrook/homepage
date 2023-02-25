import Image from 'next/image';
import { css, keyframes } from '@emotion/react';
import Container from '../../Container';
import Heading from '../../Heading';
import Text from '../../Text';
import ChevronRight from '../../Icons/ChevronRight';
import profilePic from '../../../public/me.jpg';
import { colors } from '../../../styles/helpers';
import IconsLayout from './IconsLayout';

const blink = keyframes`
  50% { opacity: 0.0; }
`;

const introCss = css`
  position: relative;
  min-height: 100vh;
  height: 100vh;

  @supports (min-height: 100dvh) or (height: 100dvh) {
    min-height: 100dvh;
    height: 100dvh;
  }
`;

const containerCss = css`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const promptCss = css`
  display: flex;
  align-items: center;

  > svg {
    stroke: ${colors.pink};
    stroke-width: 3;
  }

  ::after {
    content: '|';
    font-variation-settings: 'wght' 400;
    margin-inline-start: 0.25rem;
    color: ${colors.pink};
    animation: ${blink} 1s ease infinite;
  }
`;

function Intro() {
  return (
    <section css={introCss}>
      <IconsLayout />
      <Container css={containerCss}>
        <Image
          className="rounded-full mb-6"
          src={profilePic}
          alt="Picture of Jenia Brook"
          placeholder="blur"
          width={128}
          height={128}
        />
        <Heading as="h1">Jenia Brook</Heading>
        <Text css={promptCss} size="lg">
          <ChevronRight /> I&apos;m a Frontend Engineer
        </Text>
      </Container>
    </section>
  );
}

export default Intro;
