"use client";
import "./buttons.css";

const Button = ({ type, onClick, variant, children }) => {
  return (
    <button type={type} onClick={onClick} className={`btn ${variant}`}>
      {children}
    </button>
  );
};
export default Button;
