import Container from 'components/Container';
import Image from 'next/image';
import ProjectCard from 'components/home/ProjectCard';
import ShowAllButton from 'components/home/ShowAllButton';
import Skills from 'components/home/Skills';

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col-reverse sm:flex-row items-start w-full">
        <div className="flex flex-col flex-1">
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
            Luka Petrovic
          </h1>
          <h2 className="text-gray-700 dark:text-gray-200 mb-4">
            Senior Consultant at <span className="font-semibold">Amaris</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Fullstack developer attualmente in Italia 🇮🇹 .
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-16">
            Problem solver. Javascript enthusiast.
          </p>
        </div>
        <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
          <Image
            alt="Luka Petrovic"
            height={176}
            width={176}
            src="/avatar.png"
            className="rounded-full filter grayscale"
          />
        </div>
      </div>
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white mt-4 sm:mt-8">
        Skills
      </h3>
      <div className="grid grid-rows-5 md:grid-rows-3 grid-flow-col gap-4 w-full">
        <Skills />
      </div>

      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-8 text-black dark:text-white mt-12">
        Progetti
      </h3>
      <div className="flex gap-6 flex-col md:flex-col w-full">
        <ProjectCard
          title="Twin Yield"
          gradient="from-[#D8B4FE] to-[#818CF8]"
          slug="twin-yield"
        />
        <ProjectCard
          title="Gymless"
          gradient="from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
          slug="gymless"
        />
      </div>
      <ShowAllButton title="Mostra tutti i progetti" href={'/projects'} />

      {/* <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-16 text-black dark:text-white">
        Posts
      </h3>
      <PostCard index="01" href="/" length="20/01/2022" title="Post 1" />
      <PostCard index="02" href="/" length="20/01/2022" title="Post 2" />
      <ShowAllButton title="Mostra tutti i post" href={"/blog"} /> */}
    </Container>
  );
}
