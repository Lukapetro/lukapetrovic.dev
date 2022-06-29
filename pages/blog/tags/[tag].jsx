import BlogPost from 'components/BlogPost';
import Container from 'components/Container';
import { allBlogs } from '.contentlayer/generated';
import BackButton from 'components/BackButton';

export default function BlogTag({ posts, tag }) {
  if (!posts)
    return (
      <p className="mb-4 text-gray-600 dark:text-gray-400">
        There are no posts.
      </p>
    );

  return (
    <Container pageTitle={`#${tag}`}>
      <div className="flex gap-8">
        <BackButton href={'/blog'} label="Posts" />
        <BackButton href={'/blog/tags'} label="#Tags" />
      </div>

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
