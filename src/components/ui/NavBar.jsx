import Logo from '../core/Nav/Logo';
import NavLink from '../core/Nav/NavLink';

const NavBar = () => {
  return (
    <nav className="bg-yellow-700  shadow">
      <div className="flex flex-wrap align-center justify-between mx-6">
        <Logo />
        <ul className="flex">
          <NavLink path="/" text="Home" />
          <NavLink path="/explore" text="Explore" />
          <NavLink path="/search" text="Search" />
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
