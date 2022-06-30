import BlogLayout from 'layouts/blog';
import { allBlogs } from '.contentlayer/generated';
import components from 'components/MDXComponents';
import { useMDXComponent } from 'next-contentlayer/hooks';

export default function Post({ post }) {
  const Component = useMDXComponent(post.body.code);

  return (
    <BlogLayout post={post}>
      <Component
        components={{
          ...components
        }}
      />
    </BlogLayout>
  );
}

export async function getStaticPaths() {
  const paths = [];
  allBlogs.forEach((post) => {
    const slug = post.slug;

    paths.push({
      params: {
        slug
      },
      locale: post.locale
    });
  });

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params, locale }) {
  const postsLocale = allBlogs.filter((post) => post.locale === locale);

  const post = postsLocale.find((post) => post.slug === params.slug);

  return { props: { post } };
}
