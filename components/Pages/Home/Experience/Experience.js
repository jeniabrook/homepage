import { css } from '@emotion/react';
import { colors } from '../../../../styles/helpers';
import Container from '../../../Container';
import SectionHeading from '../../../SectionHeading';
import Text from '../../../Text';
import Title from './Title';
import Work from './Work';

const titleCss = css`
  display: flex;
  align-items: baseline;
  column-gap: 12px;
  margin-bottom: 8px;

  > p {
    color: ${colors.gray};
  }
`;

function Experience() {
  return (
    <section>
      <Container>
        <SectionHeading accentColor="teal" as="h2">
          Experience
        </SectionHeading>
        <Work>
          <Title companyName="Flare" timeRange="Nov 2022 - Present" />
          <Text isFlushMargin>
            Building polished, performant, and highly tested web apps using
            modern JavaScript frameworks.
          </Text>
        </Work>
        <Work>
          <Title companyName="Healthy.io" timeRange="Dec 2018 - Nov 2022" />
        </Work>
        <Work>
          <Title
            companyName="Headstart.co.il"
            timeRange="Oct 2017 - Dec 2018"
          />
        </Work>
      </Container>
    </section>
  );
}

export default Experience;
