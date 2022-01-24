import BlogPost from 'components/BlogPost';
import Container from 'components/Container';
import { allBlogs } from '.contentlayer/data';
import { pick } from 'contentlayer/client';

export default function Blog({ posts }) {
  return (
    <Container pageTitle="Blog">
      <p className="mb-4 text-gray-600 dark:text-gray-400">
        Scrivo online dal 2020, principalmente sullo sviluppo web e sulle varie
        tecnologiche. In totale, ho scritto 12 articoli sul mio blog.
      </p>
      {!posts.length && (
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          Non ci sono posts.
        </p>
      )}
      {posts.map((post) => (
        <BlogPost key={post.title} {...post} />
      ))}
    </Container>
  );
}

export async function getStaticProps() {
  const posts = allBlogs.map((post) =>
    pick(post, ['slug', 'title', 'summary', 'publishedAt'])
  );

  return { props: { posts } };
}
