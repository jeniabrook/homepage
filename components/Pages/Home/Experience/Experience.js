import Container from '../../../Container';
import SectionHeading from '../../../SectionHeading';
import Work from './Work';

function Experience() {
  return (
    <section>
      <Container>
        <SectionHeading accentColor="teal" as="h2">
          Experience
        </SectionHeading>
        <Work>
          <div>Some cool job description</div>
          <div>Some cool job description</div>
          <p>Hellllllllo</p>
        </Work>
        <Work>Some another cool job description</Work>
      </Container>
    </section>
  );
}

export default Experience;
