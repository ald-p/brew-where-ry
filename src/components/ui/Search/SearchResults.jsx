import SearchResult from './SearchResult';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';

const SearchResults = ({ searchVal }) => {
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(0);

  // pagination
  const PER_PAGE = 25;
  const offset = page * PER_PAGE;
  const pageCount = Math.ceil(results.length / PER_PAGE);
  const currentPageData = results.slice(offset, offset + PER_PAGE);

  const handlePageChange = (e) => {
    setPage(e.selected);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const fetchData = async () => {
      const url = encodeURI(
        `https://api.openbrewerydb.org/v1/breweries/search?query=${searchVal}&page=1&per_page=200`
      );
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setResults(data);
    };

    fetchData();
  }, [searchVal]);

  return (
    <div className="flex flex-col container">
      <h1 className="mt-12 text-2xl mx-auto">Search Results for {searchVal}</h1>
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
                {currentPageData.map((result) => (
                  <SearchResult brewery={result} key={result.id} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="mt-5 flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-700">
            Showing
            <span className="font-medium mx-1">{page + 1}</span>
            to
            <span className="font-medium mx-1">{pageCount}</span>
            of
            <span className="font-medium mx-1">{results.length}</span>
            results
          </p>
        </div>
        <ReactPaginate
          containerClassName='{"isolate inline-flex -space-x-px rounded-md shadow-sm "}'
          previousLabel={<FaAngleLeft />}
          previousClassName='{"relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"}'
          nextLabel={<FaAngleRight />}
          nextClassName="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          pageClassName="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          breakClassName="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          activeClassName="bg-yellow-700 text-white hover:bg-yellow-800"
          onPageChange={handlePageChange}
          pageCount={pageCount}
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
};

export default SearchResults;
