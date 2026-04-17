import { Link } from 'react-router-dom';

const variantClasses = {
  primary: 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 hover:from-yellow-300 hover:to-yellow-400',
  secondary: 'bg-blue-50 text-blue-700 hover:bg-blue-100 border-blue-700',
};

const Button = ({
  children,
  to,
  type = 'button',
  variant = 'secondary',
  className = '',
  disabled = false,
}) => {
  const classes = [
    'inline-flex items-center justify-center rounded-lg border-2 border-yellow-400 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] transition hover:shadow-md active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed',
    variantClasses[variant] ?? variantClasses.secondary,
    className,
  ]
    .join(' ')
    .trim();

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
};

export default Button;
