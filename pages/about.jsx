import Container from 'components/Container';
import Timeline from 'components/Timeline';

export default function About() {
  return (
    <Container pageTitle="About Me">
      <div className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">
        <p>
          Hi, I'm Luka. I am a fullstack developer. Currently I work at Amaris
          as a Senior Consultant.
        </p>
        <p>
          I grew up in San Benedetto del Tronto and did computer engineering at
          UNIVPM. In my free time I like to work out, play some video games and
          spend time with my wolfdog, Blue 🐺.
        </p>
      </div>
      <Timeline />
    </Container>
  );
}
