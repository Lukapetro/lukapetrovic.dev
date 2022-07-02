import Container from 'components/Container';
import Timeline from 'components/Timeline';
import useTranslation from 'next-translate/useTranslation';
import ExternalLink from '../components/ExternalLink';

export default function About() {
  const { t } = useTranslation('about');

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
        <p>{t('text2')}</p>
      </div>
      <Timeline />
    </Container>
  );
}
