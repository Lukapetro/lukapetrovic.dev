import Link from 'next/link';
import cn from 'classnames';

export default function ProjectCard({ title, description, slug, gradient }) {
  return (
    <Link href={`/projects/${slug}`}>
      <a
        className={cn(
          'transform hover:scale-[1.03] transition-all',
          'flex justify-center rounded-lg p-8 w-full mb-4',
          gradient
        )}
      >
        <div className="flex flex-col items-center">
          <h3 className="text-3xl font-bold text-left mt-2 text-gray-100 ">
            {title}
          </h3>
          <p className="mt-1 text-sm text-gray-200">{description}</p>
        </div>
      </a>
    </Link>
  );
}
