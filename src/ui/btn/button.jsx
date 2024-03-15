"use client";
import "./button.css";

const Button = ({ type, onClick, variant, disable, children }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="btn"
      data-variant={variant}
      disabled={disable}
    >
      {children}
    </button>
  );
};
export default Button;
