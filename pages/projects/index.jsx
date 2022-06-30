import Container from 'components/Container';
import ProjectCard from 'components/ProjectCard';
import { allProjects } from '.contentlayer/generated';
import { pick } from 'contentlayer/client';
import useTranslation from 'next-translate/useTranslation';

const gradientList = [
  'bg-gradient-to-r from-yellow-400 to-pink-500',
  'bg-gradient-to-r from-pink-500 to-purple-500',
  'bg-gradient-to-r from-purple-500 to-orange-500',
  'bg-gradient-to-r from-blue-600 via-blue-500 to-pink-500'
];

export default function Projects({ projects }) {
  const { t } = useTranslation('projects');

  return (
    <Container
      pageTitle={t('common:projects')}
      title="Progetti – Luka Petrovic"
      description="Projects developed with Javascript"
    >
      <div className="mb-8 w-full">
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          {t('thisIsACollection')}
        </p>
        <div className="grid w-full grid-cols-1 gap-4 my-2 mt-4 sm:grid-cols-1">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              slug={project.slug}
              description={project.description}
              gradient={gradientList[index]}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}

export async function getStaticProps({ locale }) {
  const projectsLocale = allProjects.filter(
    (project) => project.locale === locale
  );

  const projects = projectsLocale.map((project) =>
    pick(project, ['slug', 'title', 'description'])
  );

  return { props: { projects } };
}

// export const getStaticProps = async ({ locale }) => {
//   const language = await import(`../locales/${locale}.json`);
//   const blogs = getBlogsInformation(locale);

//   return {
//     props: {
//       lngDict: language.default,
//       blogs,
//     },
//   };
// };
