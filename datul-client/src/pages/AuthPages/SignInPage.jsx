import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const inputClasses =
  'mt-2 w-full rounded-xl border border-zinc-300 bg-zinc-100 px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-zinc-900 focus:bg-zinc-50';

const actionButtonClassName = 'w-full rounded-xl py-3 text-[11px] tracking-[0.2em]';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    
    // Basic validation
    if (!email) {
      setError('Email address is required');
      return;
    }
    if (!password) {
      setError('Password is required');
      return;
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }

    setLoading(true);
    
    // Simulate API call (replace with actual API)
    setTimeout(() => {
      setLoading(false);
      setSuccess('Sign in successful! Redirecting...');
      console.log('Login credentials:', { email, password, rememberMe });
      // TODO: Add actual authentication here
    }, 1000);
  };

  return (
    <>
      <h1 className="text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl">Log In</h1>
      <p className="mt-3 text-sm leading-6 text-blue-700">
        Access your store account to review orders, saved items, and pickup details.
      </p>

      {error && (
        <div className="mt-4 rounded-lg border border-red-300 bg-red-50 p-3 text-sm text-red-700">
          {error}
        </div>
      )}
      
      {success && (
        <div className="mt-4 rounded-lg border border-green-300 bg-green-50 p-3 text-sm text-green-700">
          ✓ {success}
        </div>
      )}

      <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="signin-email" className="text-sm font-medium text-blue-900">
            Email Address
          </label>
          <input
            id="signin-email"
            type="email"
            placeholder="student@email.com"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-2 w-full rounded-xl border border-yellow-400 bg-blue-50 px-4 py-3 text-sm text-blue-900 outline-none transition placeholder:text-blue-400 focus:border-yellow-500 focus:bg-white"
          />
        </div>

        <div>
          <label htmlFor="signin-password" className="text-sm font-medium text-blue-900">
            Password
          </label>
          <input
            id="signin-password"
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-2 w-full rounded-xl border border-yellow-400 bg-blue-50 px-4 py-3 text-sm text-blue-900 outline-none transition placeholder:text-blue-400 focus:border-yellow-500 focus:bg-white"
          />
          <p className="mt-2 text-xs leading-5 text-blue-700">
            It must be a combination of minimum 8 letters, numbers, and symbols.
          </p>
        </div>

        <div className="flex items-center justify-between gap-4 text-sm">
          <label className="flex items-center gap-2 text-blue-700">
            <input 
              type="checkbox" 
              className="h-4 w-4 rounded border-yellow-400 accent-yellow-400"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <span>Remember me</span>
          </label>
          <button type="button" className="font-medium text-blue-700 transition hover:text-blue-900">
            Forgot Password?
          </button>
        </div>

        <Button 
          type="submit" 
          variant="primary" 
          className={actionButtonClassName}
          disabled={loading}
        >
          {loading ? 'Logging In...' : 'Log In'}
        </Button>

        <div className="grid gap-3 pt-2 sm:grid-cols-2">
          <Button type="button" variant="secondary" className={actionButtonClassName}>
            Log In with Google
          </Button>
          <Button type="button" variant="secondary" className={actionButtonClassName}>
            Log In with Apple
          </Button>
        </div>
      </form>

      <div className="mt-8 border-t border-yellow-400 pt-6 text-sm text-blue-700">
        No account yet?{' '}
        <Link to="/sign-up" className="font-semibold text-blue-900 transition hover:text-blue-700">
          Sign Up
        </Link>
      </div>
    </>
  );
};

export default SignInPage;
