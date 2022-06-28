import Link from 'next/link';
import useSWR from 'swr';
import fetcher from 'utils/fetcher';
import { HiEye as EyeIcon } from 'react-icons/hi';
import cn from 'classnames';
import ALL_TAGS from '../utils/Tags.json';
import { useMemo } from 'react';
import Emoji from './Emoji';
import pluralize from '../utils/pluralize';

export default function BlogPost({ title, summary, slug, tags }) {
  const { data } = useSWR(`/api/views/${slug}`, fetcher);
  const { data: clapsData } = useSWR(`/api/claps/${slug}`, fetcher);
  const views = data?.total;
  const claps = clapsData?.total;

  const getTags = useMemo(
    () => ALL_TAGS.tags.filter((tag) => tags.includes(tag.title)),
    [tags]
  );

  return (
    <div className="rounded-xl shadow-lg bg-gray-800 border border-gray-700 w-full px-6 pt-4 pb-2">
      <Link href={`/blog/${slug}`}>
        <div className="font-bold text-xl mb-2 hover:cursor-pointer">
          {title}
        </div>
      </Link>
      <p className="text-gray-400 text-base">{summary}</p>
      <div className="my-2">
        <div className="flex">
          {getTags.map((tag) => (
            <Link key={tag.title} href={`/blog/tags/${tag.title}`}>
              <div
                className={cn(
                  'rounded p-1 hover:cursor-pointer',
                  tag.bgHover,
                  tag.border
                )}
              >
                <span className={tag.color}>#</span>
                <span className="text-sm">{tag.title}</span>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex mt-2">
          <p className="text-gray-500 text-sm flex mr-4 items-center">
            <EyeIcon className="h-4 w-4 mr-2 text-gray-400	" />
            {pluralize(views, 'view')}
          </p>
          <div className="flex items-center">
            <Emoji label="clap" symbol="👏" className="mr-2" />
            <p className="text-gray-500 text-sm flex ">
              {pluralize(claps, 'clap')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
