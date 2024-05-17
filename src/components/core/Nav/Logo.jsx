import { RiBeerFill } from 'react-icons/ri';

const Logo = () => {
  return (
    <a className="flex align-center justify-center text-yellow-50 text-4xl p-4 cursor-pointer">
      <RiBeerFill className="mr-2" />
      <h1>brew-where?-ry</h1>
    </a>
  );
};

export default Logo;
