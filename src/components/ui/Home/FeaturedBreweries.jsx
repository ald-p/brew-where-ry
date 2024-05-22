import BreweryCards from '../../core/Card/BreweryCards';
import Button from '../../core/Buttons/Button';
import { Link } from 'react-router-dom';

const FeaturedBreweries = () => {
  return (
    <section className="flex flex-col items-center justify-center mx-auto py-10 ">
      <h1 className="text-4xl font-semibold">Featured Breweries</h1>
      <BreweryCards />
      <Link to="/explore">
        <Button
          colors={'bg-yellow-700 text-yellow-50'}
          text={'View All Breweries'}
        />
      </Link>
    </section>
  );
};

export default FeaturedBreweries;
