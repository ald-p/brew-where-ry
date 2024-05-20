import Button from '../../core/Buttons/Button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="flex items-center justify-center mx-auto mt-10 p-6 w-4/5">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-semibold mb-5">
          Discover Your Next Brew Adventure!
        </h1>
        <p className="mb-4">
          Welcome to the ultimate brewery exploration platform! Whether you're a
          seasoned beer aficionado or just starting to explore the world of
          craft brews, our brewery finder is your gateway to discovering the
          finest breweries near you. With a vast database of breweries from all
          corners of the globe, we're here to help you embark on unforgettable
          beer-tasting adventures.
        </p>
        <Link to="/search">
          <Button
            colors={'bg-yellow-700 text-yellow-50'}
            text={'Start Searching!'}
          />
        </Link>
      </div>
      <img
        src="./src/assets/img/brew-map.jpeg"
        alt="animated brewery map"
        className="rounded shadow-md w-1/2 ml-12"
      />
    </section>
  );
};

export default Hero;
