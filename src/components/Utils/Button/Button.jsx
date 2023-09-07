import React from 'react';

export const Button = ({
  className,
  buttonName,
  type,
  disabled = false,
  onClick,
  content,
}) => {
  return (
    <button
      className={className}
      name={buttonName}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {content}
    </button>
  );
};
