import Container from 'components/Container';
import Timeline from 'components/Timeline';
import ExternalLink from '../components/ExternalLink';

export default function About() {
  return (
    <Container pageTitle="About Me">
      <div className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">
        <p>
          Hi, I&apos;m Luka. I am a fullstack developer. Currently I work at{' '}
          <ExternalLink
            href="https://www.faceit.com/"
            className="text-inherit hover:text-gray-800 dark:hover:text-gray-500"
          >
            FACEIT
          </ExternalLink>{' '}
          as a Senior Software Engineer. I Also collaborate as a freelancer with{' '}
          <ExternalLink
            href="https://www.fabrick.com/it/"
            className="text-inherit hover:text-gray-800 dark:hover:text-gray-500"
          >
            Fabrick
          </ExternalLink>{' '}
          and{' '}
          <ExternalLink
            href="https://www.sourcesense.com/"
            className="text-inherit hover:text-gray-800 dark:hover:text-gray-500"
          >
            SourceSense
          </ExternalLink>
          .
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
