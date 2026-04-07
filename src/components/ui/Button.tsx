import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
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
    'inline-flex items-center justify-center gap-2 font-heading font-semibold transition-all duration-300 cursor-pointer rounded-full';

  const variantStyles = {
    primary:
      'bg-accent-terracotta text-white hover:bg-accent-terracotta-light hover:-translate-y-0.5 hover:shadow-lg',
    secondary:
      'bg-transparent border-2 border-accent-terracotta text-accent-terracotta hover:bg-accent-terracotta hover:text-white',
    ghost:
      'bg-transparent text-fg-secondary hover:text-accent-terracotta hover:bg-accent-terracotta/5',
    outline:
      'bg-transparent border border-border text-fg-secondary hover:border-accent-terracotta hover:text-accent-terracotta',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-sm',
  };

  const disabledStyles = disabled
    ? 'opacity-40 cursor-not-allowed pointer-events-none'
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