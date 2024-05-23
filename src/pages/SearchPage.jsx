import Button from '../components/core/Buttons/Button';
import SearchResults from '../components/ui/Search/SearchResults';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';

const SearchPage = () => {
  const [search, setSearch] = useState('');
  const [value, setValue] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setSearch(value);
    setValue('');
  };

  const handlePageClick = (e) => {
    console.log(e.target);
  };

  return (
    <section className="flex flex-col items-center my-6">
      <h1 className="text-4xl font-semibold mb-5">Search Breweries</h1>
      <form onSubmit={handleSearch} className="flex flex-col items-center">
        <input
          className="block w-64 rounded-md border-0 m-2 p-1.5 text-gray-900  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6"
          type="text"
          placeholder="Enter search keyword..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button colors={'bg-yellow-700 text-yellow-50'} text={'Search'} />
      </form>
      {search && <SearchResults searchVal={search} />}
    </section>
  );
};

export default SearchPage;
