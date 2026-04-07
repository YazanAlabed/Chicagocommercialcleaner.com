import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'cta' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: () => void;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  disabled = false,
  onClick,
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 font-heading font-semibold transition-all duration-200 cursor-pointer rounded-[10px]';

  const variantStyles = {
    primary:
      'bg-primary text-white hover:bg-primary-dark hover:-translate-y-0.5 shadow-sm hover:shadow-md',
    cta:
      'bg-cta text-white hover:bg-cta-hover hover:-translate-y-0.5 shadow-sm hover:shadow-md',
    secondary:
      'bg-transparent border-2 border-primary text-primary hover:bg-primary-bg',
    ghost:
      'bg-transparent text-text-secondary hover:text-primary hover:bg-primary-bg',
  };

  const sizeStyles = {
    sm: 'px-3 py-2 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-6 py-3 text-sm',
  };

  const disabledStyles = disabled
    ? 'opacity-50 cursor-not-allowed pointer-events-none'
    : '';

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`
        ${baseStyles}
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${disabledStyles}
        ${className}
      `}
    >
      {children}
    </button>
  );
}