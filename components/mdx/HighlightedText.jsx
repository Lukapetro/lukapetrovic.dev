export default function HighlightedText({ color, children }) {
  switch (color) {
    case 'green-300':
      return (
        <span className="bg-green-300 text-black px-2 rounded-lg">
          {children}
        </span>
      );
    case 'green-400':
      return (
        <span className="bg-green-400 text-black px-2 rounded-lg">
          {children}
        </span>
      );
    case 'green-500':
      return <span className="bg-green-500 px-2 rounded-lg">{children}</span>;
    case 'green-600':
      return <span className="bg-green-600 px-2 rounded-lg">{children}</span>;
    case 'green-700':
      return <span className="bg-green-700 px-2 rounded-lg">{children}</span>;
    case 'green-800':
      return <span className="bg-green-800 px-2 rounded-lg">{children}</span>;
    case 'blue-200':
      return (
        <span className="bg-blue-200 text-black px-2 rounded-lg">
          {children}
        </span>
      );
    case 'blue-300':
      return (
        <span className="bg-blue-300 text-black px-2 rounded-lg">
          {children}
        </span>
      );
    case 'blue-400':
      return (
        <span className="bg-blue-400 text-black px-2 rounded-lg">
          {children}
        </span>
      );
    case 'blue-500':
      return <span className="bg-blue-500 px-2 rounded-lg">{children}</span>;
    case 'blue-600':
      return <span className="bg-blue-600 px-2 rounded-lg">{children}</span>;
    case 'blue-700':
      return <span className="bg-blue-700 px-2 rounded-lg">{children}</span>;
    case 'blue-800':
      return <span className="bg-blue-800 px-2 rounded-lg">{children}</span>;
    case 'red-300':
      return (
        <span className="bg-red-300 text-black px-2 rounded-lg">
          {children}
        </span>
      );
    case 'red-400':
      return (
        <span className="bg-red-400 text-black px-2 rounded-lg">
          {children}
        </span>
      );
    case 'red-500':
      return <span className="bg-red-500 px-2 rounded-lg">{children}</span>;
    case 'red-600':
      return <span className="bg-red-600 px-2 rounded-lg">{children}</span>;
    case 'red-700':
      return <span className="bg-red-700 px-2 rounded-lg">{children}</span>;
    case 'red-800':
      return <span className="bg-red-800 px-2 rounded-lg">{children}</span>;
    case 'orange-300':
      return (
        <span className="bg-orange-300 text-black px-2 rounded-lg">
          {children}
        </span>
      );
    case 'orange-400':
      return (
        <span className="bg-orange-400 text-black px-2 rounded-lg">
          {children}
        </span>
      );
    case 'orange-500':
      return <span className="bg-orange-500 px-2 rounded-lg">{children}</span>;
    case 'orange-600':
      return <span className="bg-orange-600 px-2 rounded-lg">{children}</span>;
    case 'orange-700':
      return <span className="bg-orange-700 px-2 rounded-lg">{children}</span>;
    case 'orange-800':
      return <span className="bg-orange-800 px-2 rounded-lg">{children}</span>;
    case 'code':
      return (
        <span className="bg-gray-700 text-red-400 px-2 rounded-lg">
          {children}
        </span>
      );
    default:
      return <span className="bg-gray-600 px-2 rounded-lg">{children}</span>;
  }
}
