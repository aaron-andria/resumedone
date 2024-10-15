import { ChangeEvent, FC } from "react";
import InputCssModule from "./Input.module.css";
import classNames from "classnames";
interface InputProps {
  type: "text" | "number" | "email" | "password";
  label: string;
  value: string | number;
  color?: "primary" | "secondary" | "success" | "danger";
  name: string;
  placeholder?: string;
  size: "md" | "lg" | "sm";
  error?: string;
  disabled?: boolean;
  wide?: boolean;
  icon?: React.ReactElement;
  iconPlacement?: "right" | "left";
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
const colors = {
  primary: "primary",
  secondary: "secondary",
  success: "success",
  danger: "danger",
};

const Input: FC<InputProps> = ({
  type,
  label,
  value,
  name,
  placeholder,
  iconPlacement = "right",
  error,
  color = "primary",
  disabled,
  wide,
  icon,
  onChange,
}) => {
  return (
    <div
      className={classNames(
        InputCssModule["input-wrapper"],
        wide && InputCssModule.wide,
      )}
    >
      <label htmlFor={label} className={InputCssModule.label}>
        {label}
      </label>
      <input
        type={type}
        id={label}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        className={classNames(
          colors[color],
          InputCssModule["input-body-md"],
          wide && InputCssModule.wide,
        )}
      />
      <span
        className={classNames(
          iconPlacement == "right"
            ? InputCssModule["icon-right"]
            : InputCssModule["icon-left"],
          (icon && "visible") || "hidden",
        )}
      >
        {icon && icon}
      </span>
      {error && <p className='error'>{error}</p>}
    </div>
  );
};

export default Input;
