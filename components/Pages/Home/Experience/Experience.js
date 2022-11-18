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
            Reimagining how clients and attorneys work together, make legal
            services accessible to those who otherwise wouldn&apos;t be able to
            afford it. Building polished, performant, and highly tested web apps
            using cutting-edge web technologies.
          </Text>
        </Work>
        <Work>
          <Title companyName="Healthy.io" timeRange="Dec 2018 - Nov 2022" />
          <Text>
            Developed multiple web applications and websites using modern
            JavaScript tooling for a fast growing company that successfully
            turned a smartphone into a clinical-grade medical device.
          </Text>
        </Work>
        <Work>
          <Title
            companyName="Headstart.co.il"
            timeRange="Oct 2017 - Dec 2018"
          />
          <Text isFlushMargin>
            Built the next generation platform for the first & leading
            crowdfunding group in Israel.
          </Text>
        </Work>
      </Container>
    </section>
  );
}

export default Experience;
