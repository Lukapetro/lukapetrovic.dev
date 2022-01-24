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

      case 'announcement':
        return (
          <div className="text-xs px-3 bg-blue-200 text-blue-800 rounded py-1 font-semibold flex justify-center items-center">
            ANNOUNCEMENT
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
    <div className="flex mb-2">
      {renderBadge(variation)}{' '}
      <h3 className="ml-2 text-lg font-semibold">{title}</h3>
    </div>
  );
}
