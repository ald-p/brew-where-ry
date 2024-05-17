const NavLink = ({ path, text }) => {
  return (
    <a
      href={path}
      className="text-md text-yellow-50 hover:bg-yellow-50 hover:text-yellow-700 rounded p-2 my-5 mx-3 font-medium"
    >
      {text}
    </a>
  );
};

export default NavLink;
