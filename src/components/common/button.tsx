import React, { useState } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  style?: React.CSSProperties;
  hoverStyle?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, style, hoverStyle, ...props }) => {
  const [isHovered, setIsHovered] = useState(false);

  const combinedStyle: React.CSSProperties = {
    ...style,
    ...(isHovered ? hoverStyle : {}),
    transition: "background 0.3s ease, box-shadow 0.3s ease",
  };

  return (
    <button
      onClick={onClick}
      style={combinedStyle}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
