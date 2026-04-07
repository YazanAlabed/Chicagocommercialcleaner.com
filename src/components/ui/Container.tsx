import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`max-w-[980px] mx-auto px-5 md:px-6 ${className}`}>
      {children}
    </div>
  );
}