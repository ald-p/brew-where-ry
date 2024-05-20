import { Link } from 'react-router-dom';

const NavLink = ({ path, text }) => {
  return (
    <Link
      to={path}
      className="text-md text-yellow-50 hover:bg-yellow-50 hover:text-yellow-700 rounded p-2 my-5 mx-3 font-medium transition ease-in-out"
    >
      {text}
    </Link>
  );
};

export default NavLink;
