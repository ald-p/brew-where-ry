import { useState, useEffect } from 'react';
import BreweryCard from './BreweryCard';

const BreweryCards = () => {
  const [breweries, setBreweries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          'https://api.openbrewerydb.org/v1/breweries/random?size=3'
        );
        const data = await res.json();
        console.log(data);
        setBreweries(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex items-center mx-auto w-3/4">
      {breweries.map((brewery) => (
        <BreweryCard brewery={brewery} key={brewery.id} />
      ))}
    </div>
  );
};

export default BreweryCards;
