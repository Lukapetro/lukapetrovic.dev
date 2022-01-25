import Container from 'components/Container';
import Image from 'next/image';
import ViewCounter from 'components/ViewCounter';

export default function ProjectLayout({ children, project }) {
  return (
    <Container title={`${project.title} - Project`}>
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <div className="flex justify-between w-full mb-8">
          <div>
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
              {project.title}
            </h1>
            <p className="text-gray-700 dark:text-gray-300">
              {project.description}
            </p>
            <ViewCounter slug={project.slug} />
          </div>
          <div className="mt-2 sm:mt-0">
            <Image
              alt={project.title}
              height={48}
              width={48}
              src={`/logos/${project.logo}`}
              className="rounded-full"
            />
          </div>
        </div>
        <div className="prose dark:prose-dark w-full">{children}</div>
      </article>
    </Container>
  );
}
