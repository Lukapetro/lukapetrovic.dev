import { useState } from 'react';
import useSWR from 'swr';
import fetcher from 'utils/fetcher';

export default function ClapsButton({ slug }) {
  const { data } = useSWR(`/api/claps/${slug}`, fetcher);
  const initialClaps = new Number(data?.total);

  const [claps, setClaps] = useState(initialClaps);
  const [effect, setEffect] = useState(false);

  const handleClick = () => {
    setEffect(true);
    setClaps(claps + 1);
  };

  if (isNaN(initialClaps)) return null;

  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-gray-500 text-sm ">{claps}</p>
      <button
        className={`${
          effect && 'animate-wiggle'
        } w-10 h-10 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center  hover:ring-2 ring-gray-300  transition-all  p-3 text-white  hover:shadow-xl`}
        onClick={handleClick}
        onAnimationEnd={() => setEffect(false)}
      >
        {'👏'}
      </button>
    </div>
  );
}
