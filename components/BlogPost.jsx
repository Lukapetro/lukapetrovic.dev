import Link from 'next/link';
import useSWR from 'swr';
import fetcher from 'utils/fetcher';
import { HiEye as EyeIcon } from 'react-icons/hi';
import Emoji from './Emoji';
import pluralize from '../utils/pluralize';
import TagsList from './tags/TagsList';

export default function BlogPost({ title, summary, slug, tags }) {
  const { data } = useSWR(`/api/views/${slug}`, fetcher);
  const { data: clapsData } = useSWR(`/api/claps/${slug}`, fetcher);
  const views = data?.total;
  const claps = clapsData?.total;

  return (
    <div className="rounded-xl shadow-lg bg-gray-100 dark:bg-gray-800 border-gray-200 border dark:border-gray-700 w-full px-6 pt-4 pb-2 mb-4">
      <Link href={`/blog/${slug}`}>
        <div className="font-bold text-xl mb-2 hover:cursor-pointer">
          {title}
        </div>
      </Link>
      <p className="text-gray-400 text-base">{summary}</p>
      <div className="my-2">
        <TagsList tags={tags} />
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
