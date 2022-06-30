import ProjectLayout from 'layouts/project';
import { allProjects } from '.contentlayer/generated';
import components from 'components/MDXComponents';
import { useMDXComponent } from 'next-contentlayer/hooks';

export default function ProjectPage({ project }) {
  const Component = useMDXComponent(project.body.code);

  return (
    <ProjectLayout project={project}>
      <Component
        components={{
          ...components
        }}
      />
    </ProjectLayout>
  );
}

export async function getStaticPaths({ locales }) {
  console.log('locales', locales);
  const paths = [];
  allProjects.forEach((project) => {
    const slug = project.slug;

    paths.push({
      params: {
        slug
      },
      locale: project.locale
    });
  });

  return {
    paths,
    fallback: false
  };

  // return {
  //   paths: allProjects.map((s) => ({ params: { slug: s.slug } })),
  //   fallback: false
  // };
}

export async function getStaticProps({ params, locale }) {
  const project = allProjects.find((project) => project.slug === params.slug);

  return { props: { project } };
}

// export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
//   if (params?.slug) {
//     const language = await import(`../../locales/${locale}.json`);
//     const remarkPlugins = [remarkPrism];
//     const { code, frontmatter, matter } = await bundleMDXFile(
//       path.join(process.cwd(), 'blogs', `${params.slug}.mdx`),
//       {
//         xdmOptions(options) {
//           options.remarkPlugins = [
//             ...(options.remarkPlugins ?? []),
//             remarkPlugins,
//           ] as never;
//           return options;
//         },
//       },
//     );

//     return {
//       props: {
//         code,
//         frontmatter,
//         readingTime: readingTime(matter.content),
//         lngDict: language.default,
//       },
//     };
//   }

//   return {
//     notFound: true,
//   };
// };
