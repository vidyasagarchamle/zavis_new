import React from "react";

interface GradientBorderButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  target?: string;
  rel?: string;
}

export function GradientBorderButton({
  children,
  className = "",
  href,
  target,
  rel,
  ...props
}: GradientBorderButtonProps) {
  const buttonContent = (
    <button 
      className="custom-gradient-btn" 
      {...props}
    >
      {children}
    </button>
  );

  if (href) {
    return (
      <a 
        href={href}
        target={target}
        rel={rel}
        className={`custom-gradient-btn-container ${className}`}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <span className={`custom-gradient-btn-container ${className}`}>
      {buttonContent}
    </span>
  );
} 