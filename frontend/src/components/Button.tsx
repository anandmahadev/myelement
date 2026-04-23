import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-md';
  
  const variants = {
    primary: 'bg-[#b7131a] text-white hover:bg-[#db322f] shadow-sm',
    secondary: 'bg-[#dce2f7] text-[#141b2b] hover:bg-[#e1e8fd]',
    ghost: 'bg-transparent text-[#b7131a] hover:bg-[#f1f3ff]',
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  // Note: Using inline styles for colors to match the design system exactly as I haven't set up Tailwind properly yet.
  // Actually, I'll use standard classes defined in index.css or inline styles.
  
  const variantStyles = {
    primary: {
      backgroundColor: '#b7131a',
      color: '#ffffff',
    },
    secondary: {
      backgroundColor: '#dce2f7',
      color: '#141b2b',
    },
    ghost: {
      backgroundColor: 'transparent',
      color: '#b7131a',
    }
  };

  const style = {
    ...variantStyles[variant],
    borderRadius: '8px',
    padding: size === 'sm' ? '8px 16px' : size === 'lg' ? '16px 32px' : '12px 24px',
    fontSize: size === 'sm' ? '12px' : size === 'lg' ? '18px' : '15px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 600,
  };

  return (
    <button 
      style={style}
      className={`btn-${variant} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
