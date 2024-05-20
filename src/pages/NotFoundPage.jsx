import { FaBan } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Button from '../components/core/Buttons/Button';

const NotFoundPage = () => {
  return (
    <section className="flex flex-col items-center justify-center mt-10">
      <FaBan className="text-6xl text-red-700 mb-4" />
      <h1 className="text-5xl font-bold mb-4">404 Not Found</h1>
      <p className="text-xl mb-6">This page does not exist</p>
      <Link to={'/'}>
        <Button colors={'bg-gray-800 text-slate-50'} text="Go Back" />
      </Link>
    </section>
  );
};

export default NotFoundPage;
