import { NavLink } from 'react-router-dom';
import logo from '../assets/img/nubdexchange_logo.png';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/products' },
];

const authLinks = [
  { label: 'Sign In', to: '/sign-in' },
  { label: 'Sign Up', to: '/sign-up' },
];

const navLinkClassName = ({ isActive }) =>
  [
    'rounded-full border-2 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition',
    isActive
      ? 'border-yellow-400 bg-yellow-400 text-blue-900'
      : 'border-transparent text-yellow-400 hover:border-yellow-400 hover:bg-blue-950 hover:text-white',
  ].join(' ');

const authLinkClassName = ({ isActive }) =>
  [
    'rounded-full border-2 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition',
    isActive
      ? 'border-yellow-400 bg-yellow-400 text-blue-900'
      : 'border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-blue-900',
  ].join(' ');

const NavBar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-4 border-yellow-400 bg-gradient-to-r from-blue-950 to-blue-900 shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-3 hover:opacity-80 transition">
          <img src={logo} alt="BulldogEx" className="h-10 w-10 rounded-full border-2 border-yellow-400 bg-white object-contain shadow-sm" />
          <div className="space-y-0.5">
            <p className="text-lg font-bold bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent">NU BAND</p>
            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-yellow-300">Musicians Essential</p>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'} className={navLinkClassName}>
              {link.label}
            </NavLink>
          ))}
          
          <div className="mx-2 h-6 w-px bg-yellow-400/30" />
          
          {authLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={authLinkClassName}>
              {link.label}
            </NavLink>
          ))}
        </nav>  
      </div>
    </header>
  );
};

export default NavBar;
