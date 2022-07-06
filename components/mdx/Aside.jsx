export default function Aside({ emoji, children }) {
  return (
    <div className="bg-gray-600 rounded-lg overflow-auto">
      <div className="max-w-7xl py-3 px-3 sm:px-6 ">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
            <span className="flex p-2 self-start">{emoji}</span>
            <span className="p-2 ml-3 font-medium text-white not-prose">
              {children}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
