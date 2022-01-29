import Container from 'components/Container';
import Image from 'next/image';
import ViewCounter from 'components/ViewCounter';

export default function ProjectLayout({ children, project }) {
  return (
    <Container
      title={`${project.title} – Luka Petrovic`}
      description={project.summary}
      image={`https://lukapetrovic.dev${project.image}`}
      type="article"
    >
      <article className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          {project.title}
        </h1>
        <div className="flex flex-col items-start justify-between w-full mt-2 md:flex-row md:items-center">
          <div className="flex items-center">
            <Image
              alt="Luka Petrovic"
              height={24}
              width={24}
              src="/avatar.png"
              className="rounded-full"
            />
            <p className="ml-2 text-sm text-gray-700 dark:text-gray-300">
              {'Luka Petrovic'}
            </p>
          </div>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 min-w-32 md:mt-0">
            {project.readingTime.text}
            {` • `}
            <ViewCounter slug={project.slug} />
          </p>
        </div>
        <div className="w-full mt-4 prose dark:prose-dark max-w-none">
          {children}
        </div>
      </article>
    </Container>
  );
  // return (
  //   <Container title={`${project.title} - Project`}>
  //     <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
  //       <div className="flex justify-between w-full mb-8">
  //         <div>
  //           <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
  //             {project.title}
  //           </h1>
  //           <ViewCounter slug={project.slug} />
  //         </div>
  //       </div>
  //       <div className="prose dark:prose-dark w-full">{children}</div>
  //     </article>
  //   </Container>
  // );
}
