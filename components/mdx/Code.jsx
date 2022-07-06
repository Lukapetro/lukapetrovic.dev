export default function Code({ children }) {
  return (
    <div className="bg-gray-700 overflow-x-scroll">
      <div className="max-w-7xl p-1">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
            <span className="text-red-400 not-prose ">{children}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
