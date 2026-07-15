const Button = ({ children, onClick, disabled = false, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`button ${disabled ? "button-disabled" : "button-active"}`}
    >
      {children}
    </button>
  );
};

export default Button;
