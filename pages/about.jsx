import Container from 'components/Container';
import Timeline from 'components/Timeline';
import useTranslation from 'next-translate/useTranslation';
import ExternalLink from '../components/ExternalLink';

export default function About() {
  const { t } = useTranslation('about');

  return (
    <Container pageTitle={t('aboutMe')}>
      <div className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">
        <p>
          {t('text1')}
          <ExternalLink
            href="https://www.faceit.com/"
            className="text-inherit hover:text-gray-800 dark:hover:text-gray-500"
          >
            FACEIT
          </ExternalLink>
          {t('text2')}
          <ExternalLink
            href="https://www.fabrick.com/it/"
            className="text-inherit hover:text-gray-800 dark:hover:text-gray-500"
          >
            Fabrick
          </ExternalLink>
          {t('text3')}
          <ExternalLink
            href="https://www.sourcesense.com/"
            className="text-inherit hover:text-gray-800 dark:hover:text-gray-500"
          >
            SourceSense
          </ExternalLink>
          .
        </p>
        <p>{t('text4')}</p>
      </div>
      <Timeline />
    </Container>
  );
}
