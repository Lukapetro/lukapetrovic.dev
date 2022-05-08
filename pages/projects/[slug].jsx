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

export async function getStaticPaths() {
  return {
    paths: allProjects.map((s) => ({ params: { slug: s.slug } })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const project = allProjects.find((project) => project.slug === params.slug);

  return { props: { project } };
}
