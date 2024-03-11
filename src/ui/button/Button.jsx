"use client";
import "./buttons.css";

const Button = ({ type, onClick, variant, children }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="btn"
      data-variant={variant}
    >
      {children}
    </button>
  );
};
export default Button;
