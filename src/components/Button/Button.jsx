import { Link } from "react-router-dom";

const base =
  "inline-flex h-16 w-full items-center justify-center rounded-full border-0 text-[18px] font-bold no-underline transition-[transform,background-color,box-shadow] duration-[250ms]";

const variants = {
  primary:
    "cursor-pointer text-white [background:linear-gradient(180deg,#dd2a4b,#b90235)] hover:-translate-y-0.5",
  secondary:
    "cursor-pointer border-2 border-solid border-brand bg-transparent text-brand hover:-translate-y-0.5 hover:bg-brand/[0.06]",
  disabled: "cursor-not-allowed bg-[#d9d9d9] text-[#888]",
};

export default function Button({
  children,
  to,
  onClick,
  disabled = false,
  type = "button",
  variant = "primary",
  className = "",
  ...rest
}) {
  const state = disabled ? "disabled" : variant === "secondary" ? "secondary" : "primary";
  const classes = `${base} ${variants[state]} ${className}`.trim();

  if (to && !disabled) {
    return (
      <Link to={to} onClick={onClick} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes} {...rest}>
      {children}
    </button>
  );
}