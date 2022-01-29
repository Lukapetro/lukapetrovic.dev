export default function Badge({ variation, title }) {
  function renderBadge(variation) {
    switch (variation) {
      case 'added':
        return (
          <div className="text-xs px-3 bg-green-200 text-green-800 rounded pt-1 pb-1 font-semibold flex justify-center items-center">
            ADDED
          </div>
        );

      case 'fixed':
        return (
          <div className="text-xs px-3 bg-indigo-200 text-indigo-800 rounded  pt-1 pb-1 font-semibold flex justify-center items-center">
            FIXED
          </div>
        );

      case 'notice':
        return (
          <div className="text-xs px-3 bg-blue-200 text-blue-800 rounded py-1 font-semibold flex justify-center items-center">
            NOTICE
          </div>
        );

      case 'removed':
        return (
          <div className="text-xs px-3 bg-red-200 text-red-800 rounded  pt-1 pb-1 font-semibold flex justify-center items-center">
            REMOVED
          </div>
        );

      default:
        break;
    }
  }

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center">
      <div className="w-24 mr-2 mb-2"> {renderBadge(variation)}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
    </div>
  );
}
