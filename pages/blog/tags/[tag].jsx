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

export async function getStaticPaths() {
  let paths = [];

  allBlogs.map((post) =>
    post.tags.map((tag) => paths.push({ params: { tag }, locale: post.locale }))
  );

  return { paths, fallback: false };
}

export async function getStaticProps({ params: { tag }, locale }) {
  const postsLocale = allBlogs.filter((post) => post.locale === locale);

  const posts = postsLocale.filter((post) => {
    return post.tags.includes(tag);
  });

  return { props: { posts, tag } };
}
