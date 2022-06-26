import Link from 'next/link';
import useSWR from 'swr';
import fetcher from 'utils/fetcher';
import { GrFormView as EyeIcon } from 'react-icons/gr';

export default function BlogPost({ title, summary, slug, tags }) {
  const { data } = useSWR(`/api/views/${slug}`, fetcher);
  const views = data?.total;

  return (
    <div className="rounded shadow-lg bg-gray-600">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{summary}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            #{tag}
          </span>
        ))}
        <p className="text-gray-500 text-sm flex">
          <EyeIcon className="h-5 w-5 mr-2" />
          {`${views ? new Number(views).toLocaleString() : '–––'} views`}
        </p>
      </div>
    </div>
    // <Link href={`/blog/${slug}`}>
    //   <a className="w-full">
    //     <div className="w-full mb-8">
    //       <div className="flex flex-col justify-between md:flex-row">
    //         <h4 className="w-full mb-2 text-lg font-bold text-gray-900 md:text-xl dark:text-gray-100">
    //           {title}
    //         </h4>
    //         <p className="w-32 mb-4 text-left text-gray-500 md:text-right md:mb-0">
    //           {`${views ? new Number(views).toLocaleString() : '–––'} views`}
    //         </p>
    //       </div>
    //       <p className="text-gray-600 dark:text-gray-400">{summary}</p>
    //     </div>
    //   </a>
    // </Link>
  );
}
