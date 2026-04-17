import { Link } from 'react-router-dom';

const Footer = () => {
  const links = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Products', to: '/products' },
    { label: 'Sign In', to: '/sign-in' },
  ];

  return (
    <footer className="border-t-2 border-yellow-400 bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950 text-white">
      {/* Main Footer */}
      <div className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-8">
            {/* Brand */}
            <div>
              <p className="text-lg font-bold bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent">NU BAND STORE</p>
              <p className="mt-2 text-sm text-blue-200">Premium musical instruments and accessories for musicians</p>
            </div>
            
            {/* Links */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">Navigation</p>
              <ul className="mt-4 space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-[13px] text-blue-200 hover:text-yellow-400 transition">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">Support</p>
              <ul className="mt-4 space-y-2 text-[13px] text-blue-200">
                <li>Email: store@nu.edu.ph</li>
                <li>Phone: +63 (0) 2 XXXX XXXX</li>
                <li>Hours: 9AM - 5PM</li>
              </ul>
            </div>

            {/* Follow */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">Follow Us</p>
              <ul className="mt-4 space-y-2 text-[13px]">
                <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-yellow-400 transition">Facebook</a></li>
                <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-yellow-400 transition">Instagram</a></li>
                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-yellow-400 transition">Twitter</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-800 px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-yellow-300">
            © 2024 NU Band Store. All rights reserved.
          </p>
          <p className="text-[11px] text-yellow-400">
            Designed with ♪ for musicians
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
