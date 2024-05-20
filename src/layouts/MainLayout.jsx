import NavBar from '../components/ui/NavBar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default MainLayout;
