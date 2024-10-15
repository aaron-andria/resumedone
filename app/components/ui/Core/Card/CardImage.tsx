import Image from "next/image";
import CardCssModule from "./Card.module.css";
export type CardImageProps = {
  children: JSX.Element;
};
export default function CardImage({ children }: CardImageProps) {
  return <div className={CardCssModule["image-wrapper"]}>{children}</div>;
}
