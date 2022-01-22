import Image from 'next/image';
import Link from 'next/link';

export default function ProjectCard({
  title,
  description,
  slug,
  logo,
  ...rest
}) {
  return (
    <Link href={`/projects/${slug}`}>
      <a
        className="flex border-4 border-grey-200 dark:border-gray-800 rounded p-4 w-full bg-white dark:bg-gray-900"
        {...rest}
      >
        <Image
          alt={title}
          height={64}
          width={64}
          src={`/logos/${logo}`}
          className="rounded-full"
        />
        <div className="flex flex-col ml-8 ">
          <h3 className="text-lg font-bold text-left mt-2 text-gray-900 dark:text-gray-100">
            {title}
          </h3>
          <p className="mt-1 text-gray-700 dark:text-gray-400">{description}</p>
        </div>
      </a>
    </Link>
  );
}
