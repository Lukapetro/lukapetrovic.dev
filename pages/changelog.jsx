import ChangelogCard from 'components/ChangelogCard';
import Container from 'components/Container';
import { allChangelogs } from '.contentlayer/data';
import { pick } from 'contentlayer/client';

export default function Changelog({ changelogs }) {
  return (
    <Container
      pageTitle="Changelog"
      title="Changelog – Luka Petrovic"
      description="Source of truth for all changes made to the portfolio"
    >
      <div>
        <p className="text-gray-600 dark:text-gray-400 mb-2">
          This changelog is meant to be a roadmap for all the changes made to
          this portfolio.
        </p>
        <ul>
          {changelogs.map((changelog) => (
            <ChangelogCard key={changelog.title} {...changelog} />
          ))}
        </ul>
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const changelogs = allChangelogs
    .map((changelog) => pick(changelog, ['title', 'body']))
    .sort((a, b) => new Date(a.title) - new Date(b.title))
    .reverse();

  return { props: { changelogs } };
}
