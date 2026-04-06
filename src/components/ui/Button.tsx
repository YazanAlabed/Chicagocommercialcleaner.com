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
    'inline-flex items-center justify-center font-heading font-semibold uppercase tracking-wider relative overflow-hidden transition-all duration-300 cursor-pointer';

  const variantStyles = {
    primary:
      'bg-accent-primary text-bg-base hover:bg-fg-primary hover:shadow-[0_0_30px_rgba(226,255,0,0.4)] active:scale-95',
    secondary:
      'bg-bg-surface text-fg-primary border-2 border-border hover:border-accent-primary hover:text-accent-primary',
    ghost:
      'bg-transparent text-fg-secondary hover:text-accent-primary hover:bg-bg-surface',
    outline:
      'bg-transparent border-2 border-accent-primary text-accent-primary hover:bg-accent-primary hover:text-bg-base',
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
      <span className="relative z-10">{children}</span>
    </button>
  );
}