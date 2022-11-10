import { css } from '@emotion/react';
import Container from '../../../Container';
import SectionHeading from '../../../SectionHeading';
import Text from '../../../Text';
import React from './Logos/React';
import JavaScript from './Logos/JavaScript';
import TypeScript from './Logos/TypeScript';
import NextJs from './Logos/NextJs';
import Webpack from './Logos/Webpack';
import Vite from './Logos/Vite';
import Emotion from './Logos/Emotion';
import Redux from './Logos/Redux';
import Jest from './Logos/Jest';
import Node from './Logos/Node';
import TanStackQuery from './Logos/TanStackQuery';
import GraphQl from './Logos/GraphQl';
import Git from './Logos/Git';
import { mediaQuery } from '../../../../styles/helpers';

const technologies = [
  [JavaScript, 'JavaScript'],
  [TypeScript, 'TypeScript'],
  [React, 'React'],
  [NextJs, 'Next.js'],
  [Redux, 'Redux'],
  [Emotion, 'Emotion'],
  [TanStackQuery, 'TanStack Query'],
  [GraphQl, 'GraphQL'],
  [Jest, 'Jest'],
  [Node, 'Node.js'],
  [Webpack, 'Webpack'],
  [Vite, 'Vite'],
  [Git, 'Git'],
];

const techStackGridCss = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 30px;

  ${mediaQuery.md} {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`;

const logoWrapperCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90px;
`;

const labelCss = css`
  text-align: center;
  font-size: 0.9rem;

  ${mediaQuery.md} {
    font-size: 1rem;
  }
`;

function TechStack() {
  return (
    <section>
      <Container>
        <SectionHeading accentColor="orange">Tech Stack</SectionHeading>
        <div css={techStackGridCss}>
          {technologies.map(([Logo, label]) => {
            return (
              <div key={label}>
                <div css={logoWrapperCss}>
                  <Logo />
                </div>
                <Text css={labelCss} isFlushMargin>
                  {label}
                </Text>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default TechStack;
