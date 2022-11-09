import Card from '../Card';
import Container from '../Container';
import SectionHeading from '../SectionHeading';
import Text from '../Text';

function AboutMe() {
  return (
    <section>
      <Container>
        <SectionHeading accentColor="indigo" as="h2">
          About Me
        </SectionHeading>
        <Card>
          <Text isFlushMargin>
            I&apos;m a frontend engineer located in Israel. I have a serious
            passion about cutting-edge, pixel-perfect, beautiful interfaces and
            intuitively implemented user experience. Well-organized person,
            autodidact, independent employee with high attention to details.
            Constantly learning new things, happy to share vast knowledge and
            love to code. Interested in the entire frontend spectrum and working
            on ambitious projects with positive people.
          </Text>
        </Card>
      </Container>
    </section>
  );
}

export default AboutMe;
