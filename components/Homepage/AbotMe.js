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
        <Card>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nisl
          tortor, dictum non rutrum quis, semper ut ipsum. Donec a elit
          dignissim tortor ultrices dapibus. Morbi eget ex egestas, commodo arcu
          varius, finibus magna. Curabitur in leo vitae ipsum scelerisque
          faucibus. Vestibulum et faucibus dui. Ut consequat, ligula nec
          ullamcorper ornare, nunc velit sollicitudin diam, at rhoncus neque
          justo et lectus. Curabitur eu convallis mauris. In hac habitasse
          platea dictumst. Nam tincidunt imperdiet purus iaculis bibendum.
          Suspendisse cursus mi nec feugiat ornare. Vivamus fermentum
          pellentesque velit quis volutpat.
        </Card>
      </Container>
    </section>
  );
}

export default AboutMe;
