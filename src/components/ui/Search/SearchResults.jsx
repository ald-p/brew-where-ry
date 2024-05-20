import SearchResult from './SearchResult';
import { useState, useEffect } from 'react';

const SearchResults = ({ searchVal }) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = encodeURI(
        `https://api.openbrewerydb.org/v1/breweries/search?query=${searchVal}&page=1&per_page=25`
      );
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setResults(data);
    };

    fetchData();
  }, [searchVal]);

  return (
    <div className="flex flex-col">
      <h1 className="mt-12 text-2xl mx-auto">Search Results</h1>
      <div className="mt-6 -m-1.5 overflow-x-auto border rounded p-2">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    Address
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    Type
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
                  ></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {results.map((result) => (
                  <SearchResult brewery={result} key={result.id} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
