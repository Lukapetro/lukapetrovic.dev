import BlogPost from 'components/BlogPost';
import Container from 'components/Container';
import { allBlogs } from '.contentlayer/generated';

export default function BlogTag({ posts, tag }) {
  console.log('posts', posts);
  return (
    <Container pageTitle={`#${tag}`}>
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
