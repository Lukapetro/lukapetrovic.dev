import BlogPost from 'components/BlogPost';
import Container from 'components/Container';
import { allBlogs } from '.contentlayer/generated';
import { pick } from 'contentlayer/client';

export default function BlogTag({ posts }) {
  console.log('posts', posts);
  return <Container pageTitle="Blog tags">asd</Container>;
}

export async function getStaticPaths() {
  return {
    paths: allBlogs.map((blog) => ({ params: { tags: blog.tag } })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  console.log('params', params);
  const post = allBlogs.find((post) => post.tag === params.tag);

  return { props: { post } };
}
