import Container from 'components/Container';
import ProjectCard from 'components/ProjectCard';

export default function Projects({ projects }) {
  return (
    <Container
      pageTitle="Progetti"
      title="Progetti – Luka Petrovic"
      description="Collezione di progetti sviluppati principalmente con Javascript."
    >
      <div className="mb-8">
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Qui sono presentati alcuni dei progetti che ho sviluppato. Alcuni sono
          live in produzione, altri sono stati una bella esperienza.
        </p>
        <div className="grid w-full grid-cols-1 gap-4 my-2 mt-4 sm:grid-cols-1">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              slug={project.slug}
              logo={project.logo}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const projects = allProjects.map((project) =>
    pick(project, ['slug', 'title', 'logo', 'description'])
  );

  return { props: { projects } };
}
