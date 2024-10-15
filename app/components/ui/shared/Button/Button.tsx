import { ChangeEvent, FC } from "react";
import classNames from "classnames";
import ButtonCssModule from "./Button.module.css";
interface ButtonProps {
  color?: "primary" | "secondary" | "success" | "danger";
  size: "md" | "lg" | "sm";
  disabled?: boolean;
  icon?: React.ReactElement;
  iconPlacement?: "right" | "left";
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactElement | string;
}

export const Button: FC<ButtonProps> = ({
  children,
  size = "md",
  color = "primary",
}: ButtonProps) => {
  return (
    <button
      className={classNames(
        ButtonCssModule.button,
        ButtonCssModule[size],
        ButtonCssModule[color],
      )}
    >
      {children}
    </button>
  );
};
