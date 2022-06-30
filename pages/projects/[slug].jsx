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
}

export async function getStaticProps({ params, locale }) {
  const projectsLocale = allProjects.filter(
    (project) => project.locale === locale
  );

  const project = projectsLocale.find(
    (project) => project.slug === params.slug
  );

  return { props: { project } };
}
