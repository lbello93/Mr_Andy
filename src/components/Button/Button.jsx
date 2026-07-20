import "./Button.css";

const Button = ({ children, onClick, disabled = false, type = "button", variant = "primary" }) => {
  const variantClass = disabled
    ? "button-disabled"
    : variant === "secondary"
    ? "button-secondary"
    : "button-active";

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
