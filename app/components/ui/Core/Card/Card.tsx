import { Children } from "react";
import CardCssModule from "./Card.module.css";
import classNames from "classnames";
export type CardProps = {
  children: JSX.Element | JSX.Element[];
  image?: JSX.Element;
  color?: "primary" | "secondary" | "white";
  imagePlacement?: "left" | "right";
};
export default function Card({
  children,
  color = "primary",
  image,
  imagePlacement = "left",
}: CardProps) {
  return (
    <div
      className={classNames(
        CardCssModule["card-wrapper"],
        CardCssModule[color],
      )}
    >
      {children}
    </div>
  );
}
