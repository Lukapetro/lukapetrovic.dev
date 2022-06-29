import BlogPost from 'components/BlogPost';
import Container from 'components/Container';
import { allBlogs } from '.contentlayer/generated';
import Link from 'next/link';

export default function BlogTag({ posts, tag }) {
  return (
    <Container pageTitle={`#${tag}`}>
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
      {!posts.length && (
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          There are no posts.
        </p>
      )}
      <div className="mt-4 w-full">
        {posts.map((post) => (
          <BlogPost key={post.title} {...post} />
        ))}
      </div>
    </Container>
  );
}

export async function getStaticProps({ params: { tag } }) {
  const posts = allBlogs.filter((post) => {
    return post.tags.includes(tag);
  });

  return { props: { posts, tag } };
}

export async function getStaticPaths() {
  let paths = [];

  allBlogs.map((post) =>
    post.tags.map((tag) => paths.push({ params: { tag } }))
  );

  return { paths, fallback: false };
}
