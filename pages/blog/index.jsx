import BlogPost from 'components/BlogPost';
import Container from 'components/Container';
import { allBlogs } from '.contentlayer/generated';
import { pick } from 'contentlayer/client';
import Link from 'next/link';

export default function Blog({ posts }) {
  if (!posts)
    return (
      <p className="mb-4 text-gray-600 dark:text-gray-400">
        There are no posts.
      </p>
    );

  return (
    <Container pageTitle="Blog">
      <Link href={'/blog/tags'}>
        <a className="flex text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6 justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
              clipRule="evenodd"
            />
          </svg>
          Filter by #Tags
        </a>
      </Link>
      <div className="mt-6 w-full">
        {posts.map((post) => (
          <BlogPost key={post.title} {...post} />
        ))}
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const posts = allBlogs.map((post) =>
    pick(post, ['slug', 'title', 'summary', 'publishedAt', 'tags'])
  );

  return { props: { posts } };
}
