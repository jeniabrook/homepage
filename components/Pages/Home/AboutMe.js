import Card from '../../Card';
import Container from '../../Container';
import SectionHeading from '../../SectionHeading';
import Text from '../../Text';

function AboutMe() {
  return (
    <section>
      <Container>
        <SectionHeading accentColor="indigo" as="h2">
          About Me
        </SectionHeading>
        <Card>
          <Text isFlushMargin>
            I am a frontend engineer based in Israel who is deeply passionate
            about designing and implementing cutting-edge, visually stunning
            interfaces with intuitive user experiences. I am a highly organized,
            self-taught, and detail-oriented individual who takes pride in
            delivering top-quality work. I am constantly expanding my knowledge
            and skills, and enjoy sharing my expertise with others. I am
            fascinated by the entire frontend spectrum and relish working on
            challenging projects with positive, like-minded individuals.
          </Text>
        </Card>
      </Container>
    </section>
  );
}

export default AboutMe;
