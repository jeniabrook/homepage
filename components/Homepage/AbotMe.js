import Card from '../Card';
import Container from '../Container';
import SectionHeading from '../SectionHeading';

function AboutMe() {
  return (
    <section>
      <Container>
        <SectionHeading accentColor="indigo" as="h2">
          About Me
        </SectionHeading>
        <Card>hi</Card>
      </Container>
    </section>
  );
}

export default AboutMe;
