import { RiBeerFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link
      className="flex align-center justify-center text-yellow-50 text-4xl p-4 cursor-pointer"
      to="/"
    >
      <RiBeerFill className="mr-2" />
      <h1>brew-where?-ry</h1>
    </Link>
  );
};

export default Logo;
