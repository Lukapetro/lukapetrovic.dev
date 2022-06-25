import { useState, useEffect, useMemo } from 'react';
import useSWR from 'swr';
import fetcher from 'utils/fetcher';

export default function ClapsButton({ slug }) {
  const { data } = useSWR(`/api/claps/${slug}`, fetcher);
  const initialClaps = useMemo(() => new Number(data?.total || 0), [data]);

  const [claps, setClaps] = useState(initialClaps);
  const [effect, setEffect] = useState(false);

  useEffect(() => {
    setClaps(initialClaps);
  }, [initialClaps]);

  const handleClick = () => {
    setEffect(true);
    setClaps(claps + 1);
    const registerClap = () =>
      fetch(`/api/claps/${slug}`, {
        method: 'POST'
      });

    registerClap();
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-gray-500 text-sm ">
        {`${claps > 0 ? claps.toLocaleString() : 0}`}
      </p>
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
