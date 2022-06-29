import BlogPost from 'components/BlogPost';
import Container from 'components/Container';
import { allBlogs } from '.contentlayer/generated';
import Link from 'next/link';
import BackButton from 'components/BackButton';

export default function BlogTag({ posts, tag }) {
  return (
    <Container pageTitle={`#${tag}`}>
      <div className="flex gap-8">
        <BackButton href={'/blog'} label="Back to all posts" />
        <BackButton href={'/blog/tags'} label="Back to all #Tags" />
      </div>

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
