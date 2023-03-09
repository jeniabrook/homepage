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

function TechStack() {
  return (
    <section>
      <Container>
        <SectionHeading accentColor="orange">Tech Stack</SectionHeading>
        <div className="grid grid-cols-3 gap-y-7 md:grid-cols-5">
          {technologies.map(([Logo, label]) => {
            return (
              <div key={label}>
                <div className="flex justify-center items-center min-h-[90px]">
                  <Logo />
                </div>
                <Text
                  className="text-center text-sm md:text-base"
                  isFlushMargin
                >
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
