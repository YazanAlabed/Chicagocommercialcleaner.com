import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ${className}`}>
      {children}
    </div>
  );
}