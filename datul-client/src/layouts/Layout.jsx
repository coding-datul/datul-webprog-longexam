import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Layout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50 text-blue-900 flex flex-col">
      <NavBar />
      <main className="pb-20 pt-24 flex-1">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
};

export default Layout;
