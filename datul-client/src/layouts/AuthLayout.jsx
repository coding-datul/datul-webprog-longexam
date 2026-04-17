import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '../assets/img/nubdexchange_logo.png';

const AuthLayout = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-blue-900">
      <Link 
        to="/" 
        className="fixed left-4 top-4 z-10 inline-flex items-center gap-2 rounded-lg border-2 border-yellow-400 bg-yellow-400 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-900 transition hover:bg-yellow-500 sm:left-6 sm:top-6"
      >
        ← Home
      </Link>
      <div className="grid min-h-screen w-full lg:grid-cols-[1fr_0.95fr]">
        <div className="flex flex-col items-center justify-center gap-6 border-b-2 border-yellow-400 bg-gradient-to-br from-blue-100 to-blue-50 p-8 sm:p-10 lg:border-b-0 lg:border-r-2 lg:border-yellow-400 lg:p-16">
          <img 
            src={logo} 
            alt="NU Band Store" 
            className="h-24 w-24 rounded-full border-4 border-yellow-400 bg-white p-2 shadow-lg object-contain"
          />
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">NU BAND STORE</h2>
            <p className="text-sm text-blue-700">Musicians Essential</p>
          </div>
        </div>

        <main className="flex items-center bg-white px-6 py-10 sm:px-10 lg:px-16">
          <div className="mx-auto w-full max-w-md">
            <Outlet />
          </div>
        </main>
      </div>
    </section>
  );
};

export default AuthLayout;
