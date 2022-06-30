import cn from 'classnames';
import Link from 'next/link';
import pluralize from 'utils/pluralize';

export default function TagsCard({ tag, count }) {
  return (
    <div
      className={`rounded-lg shadow-lg p-4 bg-gray-100 dark:bg-gray-800 border-t-8 ${tag.borderTop} h-40 md:h-44 min-h-full`}
    >
      <div className="flex flex-col h-full">
        <Link href={`/blog/tags/${tag.title}`}>
          <div
            className={cn(
              'rounded flex p-1 hover:cursor-pointer first:-ml-1 border border-transparent w-fit px-2',
              tag.bgHover,
              tag.border
            )}
          >
            <span className={`text-xl font-bold ${tag.color}`}>#</span>
            <h2 className="text-xl">{tag.title}</h2>
          </div>
        </Link>

        <p className="text-md font-light text-gray-500 dark:text-gray-300">
          {tag.subTitle}
        </p>
        <p className="text-sm text-gray-400 dark:text-gray-600 mt-auto">
          {pluralize(count, 'post')} published
        </p>
      </div>
    </div>
  );
}
