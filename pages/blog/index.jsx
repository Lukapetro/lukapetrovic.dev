import BlogPost from 'components/BlogPost';
import Container from 'components/Container';
import { allBlogs } from '.contentlayer/generated';
import { pick } from 'contentlayer/client';

export default function Blog({ posts }) {
  return (
    <Container pageTitle="Blog">
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

export async function getStaticProps() {
  const posts = allBlogs.map((post) =>
    pick(post, ['slug', 'title', 'summary', 'publishedAt', 'tags'])
  );

  return { props: { posts } };
}
