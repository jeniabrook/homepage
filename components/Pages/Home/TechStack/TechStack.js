import { css } from '@emotion/react';
import Container from '../../../Container';
import SectionHeading from '../../../SectionHeading';
import Text from '../../../Text';
import React from './Logos/React';

const technologies = [[React, 'React']];

const logoWrapperCss = css`
  width: 90px;
  display: flex;
`;

function TechStack() {
  return (
    <section>
      <Container>
        <SectionHeading accentColor="orange">Tech Stack</SectionHeading>
        <div>
          {technologies.map(([Logo, label]) => {
            return (
              <div key={label}>
                <div css={logoWrapperCss}>
                  <Logo />
                </div>
                <Text>{label}</Text>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default TechStack;
