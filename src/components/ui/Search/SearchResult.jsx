import { Link } from 'react-router-dom';

const SearchResult = ({ brewery }) => {
  return (
    <tr className="hover:bg-gray-100">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
        {brewery.name}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
        {`${brewery.street ? `${brewery.street},` : ''} ${brewery.city}, ${
          brewery.state_province
        } ${brewery.postal_code.slice(0, 5)}`}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
        {brewery.brewery_type}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
        <Link to={`/brewery/${brewery.id}`}>
          <button
            type="button"
            className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-yellow-600 hover:text-yellow-800 disabled:opacity-50 disabled:pointer-events-none"
          >
            Details
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default SearchResult;
