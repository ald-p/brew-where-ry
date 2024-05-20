import BreweryCards from '../../core/Card/BreweryCards';

const FeaturedBreweries = () => {
  return (
    <section className="flex flex-col items-center justify-center mx-auto pt-10">
      <h1 className="text-4xl font-semibold">Featured Breweries</h1>
      <BreweryCards />
    </section>
  );
};

export default FeaturedBreweries;
