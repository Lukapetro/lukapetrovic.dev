import Link from 'next/link';
import cn from 'classnames';

export default function ProjectCard({ title, description, slug, gradient }) {
  return (
    <Link href={`/projects/${slug}`}>
      <a
        // className="flex justify-center border-4 border-grey-200 dark:border-gray-800 rounded-lg p-8 w-full bg-white dark:bg-gray-900"
        className={cn(
          'transform hover:scale-[1.03] transition-all',
          'flex justify-center rounded-lg p-8 w-full mb-4',
          gradient
        )}
      >
        <div className="flex flex-col items-center">
          <h3
            className="text-3xl font-bold text-left mt-2 text-gray-100 "
            //  className="text-2xl font-bold text-left mt-2 text-gray-900 dark:text-gray-100"
          >
            {title}
          </h3>
          <p className="mt-1 text-sm text-gray-200">{description}</p>
        </div>
      </a>
    </Link>
  );
}
