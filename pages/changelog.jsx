import ChangelogCard from 'components/ChangelogCard';
import Container from 'components/Container';
import { allChangelogs } from '.contentlayer/data';
import { pick } from 'contentlayer/client';

export default function Changelog({ changelogs }) {
  return (
    <Container
      pageTitle="Changelog"
      title="Changelog – Luka Petrovic"
      description="Fonte della verità per tutte le modifiche fatte al portfolio"
    >
      <div>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Questo changelog vuole essere un tracciato per tutte le modifiche
          apportate su questo portfolio.
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
    .sort((a, b) => Number(new Date(a.title)) - Number(new Date(b.title)))
    .reverse();

  return { props: { changelogs } };
}
