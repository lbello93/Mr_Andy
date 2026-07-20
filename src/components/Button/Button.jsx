import { Link } from "react-router-dom";
import "./Button.css";

const Button = ({ children, onClick, disabled = false, type = "button", variant = "primary", to }) => {
  const variantClass = disabled
    ? "button-disabled"
    : variant === "secondary"
    ? "button-secondary"
    : "button-active";

  if (to && !disabled) {
    return (
      <Link to={to} className={`button ${variantClass}`}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`button ${variantClass}`}
    >
      {children}
    </button>
  );
};

export default Button;
