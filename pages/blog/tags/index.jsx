import Container from 'components/Container';
import ALL_TAGS from 'utils/Tags.json';
import TagsCard from 'components/tags/TagsCard';
import { allBlogs } from '.contentlayer/generated';

export default function Blog({ count }) {
  const { tags } = ALL_TAGS;

  return (
    <Container pageTitle="Tags">
      <div className="mt-4 w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        {tags.map((tag) => (
          <TagsCard key={tag.title} tag={tag} count={count[tag.title]} />
        ))}
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const count = {};

  allBlogs.map((post) => {
    for (const element of post.tags) {
      if (count[element]) {
        count[element] += 1;
      } else {
        count[element] = 1;
      }
    }
  });

  return { props: { count } };
}
