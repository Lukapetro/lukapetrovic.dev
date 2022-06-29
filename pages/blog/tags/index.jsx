import Container from 'components/Container';
import ALL_TAGS from 'utils/Tags.json';
import TagsCard from 'components/tags/TagsCard';
import { allBlogs } from '.contentlayer/generated';
import Link from 'next/link';

export default function Blog({ count }) {
  const { tags } = ALL_TAGS;

  return (
    <Container pageTitle="Tags">
      <Link href={'/blog'}>
        <a className="flex text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6 justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to all posts
        </a>
      </Link>
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
