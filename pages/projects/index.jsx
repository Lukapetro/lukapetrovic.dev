import Container from 'components/Container';
import ProjectCard from 'components/ProjectCard';
import { allProjects } from '.contentlayer/data';
import { pick } from 'contentlayer/client';

export default function Projects({ projects }) {
  return (
    <Container
      pageTitle="Projects"
      title="Progetti – Luka Petrovic"
      description="Projects developed with Javascript"
    >
      <div className="mb-8">
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          This is a collection of some of my works and projects I made
          throughout the years.
        </p>
        <div className="grid w-full grid-cols-1 gap-4 my-2 mt-4 sm:grid-cols-1">
          {projects.map(
            (project) =>
              project.isPublished && (
                <ProjectCard
                  key={project.slug}
                  title={project.title}
                  slug={project.slug}
                  logo={project.logo}
                  description={project.description}
                />
              )
          )}
        </div>
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const projects = allProjects.map((project) =>
    pick(project, ['slug', 'title', 'logo', 'description', 'isPublished'])
  );

  return { props: { projects } };
}
