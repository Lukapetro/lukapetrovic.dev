import Link from 'next/link';
import { useMemo } from 'react';
import ALL_TAGS from 'utils/Tags.json';
import cn from 'classnames';

export default function TagsList({ tags }) {
  const getTags = useMemo(
    () => ALL_TAGS.tags.filter((tag) => tags.includes(tag.title)),
    [tags]
  );

  return (
    <div className="flex">
      {getTags.map((tag) => (
        <Link key={tag.title} href={`/blog/tags/${tag.title}`}>
          <div
            className={cn(
              'rounded p-1 hover:cursor-pointer first:-ml-1 border border-transparent ',
              tag.bgHover,
              tag.border
            )}
          >
            <span className={tag.color}>#</span>
            <span className="text-sm font-light">{tag.title}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
