import Button from '../Buttons/Button';
import { Link } from 'react-router-dom';

const BreweryCard = ({ brewery }) => {
  return (
    <div className="rounded p-6 shadow-lg m-4 flex-1 h-64 container">
      <p className="text-gray-400 text-xs">{brewery.brewery_type}</p>
      <div className="flex flex-col items-center justify-between my-3 text-center h-full p-4">
        <p className="text-lg font-semibold">{brewery.name}</p>
        <p className="text-sm my-3">{`${
          brewery.address_1 ? brewery.address_1 : ''
        } ${brewery.city}, ${brewery.state_province} ${
          brewery.postal_code
        }`}</p>
        <Link to={`/brewery/${brewery.id}`}>
          <Button colors={'bg-emerald-700 text-yellow-50'} text={'More Info'} />
        </Link>
      </div>
    </div>
  );
};

export default BreweryCard;
