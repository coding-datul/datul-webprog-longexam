import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const inputClasses =
  'mt-2 w-full rounded-xl border border-zinc-300 bg-zinc-100 px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-zinc-900 focus:bg-zinc-50';

const actionButtonClassName = 'w-full rounded-xl py-3 text-[11px] tracking-[0.2em]';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Validation
    if (!formData.firstName.trim()) {
      setError('First name is required');
      return;
    }
    if (!formData.lastName.trim()) {
      setError('Last name is required');
      return;
    }
    if (!formData.email) {
      setError('Email address is required');
      return;
    }
    if (!formData.password) {
      setError('Password is required');
      return;
    }
    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }

    setLoading(true);

    // Simulate API call (replace with actual API)
    setTimeout(() => {
      setLoading(false);
      setSuccess('Account created successfully! Redirecting to login...');
      console.log('New account:', formData);
      // TODO: Add actual registration here
    }, 1000);
  };

  return (
    <>
      <h1 className="text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl">Sign Up</h1>
      <p className="mt-3 text-sm leading-6 text-blue-700">
        Create a store account for faster checkout, order updates, and pickup details.
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
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="firstName" className="text-sm font-medium text-blue-900">
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              placeholder="First name"
              autoComplete="given-name"
              value={formData.firstName}
              onChange={handleChange}
              className="mt-2 w-full rounded-xl border border-yellow-400 bg-blue-50 px-4 py-3 text-sm text-blue-900 outline-none transition placeholder:text-blue-400 focus:border-yellow-500 focus:bg-white"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="text-sm font-medium text-blue-900">
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              placeholder="Last name"
              autoComplete="family-name"
              value={formData.lastName}
              onChange={handleChange}
              className="mt-2 w-full rounded-xl border border-yellow-400 bg-blue-50 px-4 py-3 text-sm text-blue-900 outline-none transition placeholder:text-blue-400 focus:border-yellow-500 focus:bg-white"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="text-sm font-medium text-blue-900">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="student@email.com"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-2 w-full rounded-xl border border-yellow-400 bg-blue-50 px-4 py-3 text-sm text-blue-900 outline-none transition placeholder:text-blue-400 focus:border-yellow-500 focus:bg-white"
          />
        </div>

        <div>
          <label htmlFor="password" className="text-sm font-medium text-blue-900">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            autoComplete="new-password"
            value={formData.password}
            onChange={handleChange}
            className="mt-2 w-full rounded-xl border border-yellow-400 bg-blue-50 px-4 py-3 text-sm text-blue-900 outline-none transition placeholder:text-blue-400 focus:border-yellow-500 focus:bg-white"
          />
          <p className="mt-2 text-xs leading-5 text-blue-700">
            Use a secure password with letters, numbers, and symbols.
          </p>
        </div>

        <Button 
          type="submit" 
          variant="primary" 
          className={actionButtonClassName}
          disabled={loading}
        >
          {loading ? 'Creating Account...' : 'Create Account'}
        </Button>

        <div className="grid gap-3 pt-2 sm:grid-cols-2">
          <Button type="button" variant="secondary" className={actionButtonClassName}>
            Sign Up with Google
          </Button>
          <Button type="button" variant="secondary" className={actionButtonClassName}>
            Sign Up with Facebook
          </Button>
        </div>
      </form>

      <div className="mt-8 border-t border-yellow-400 pt-6 text-sm text-blue-700">
        Already have an account?{' '}
        <Link to="/sign-in" className="font-semibold text-blue-900 transition hover:text-blue-700">
          Log In
        </Link>
      </div>
    </>
  );
};

export default SignUpPage;
