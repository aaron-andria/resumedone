import CardCssModule from "./Card.module.css";
export default function CardContent({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return <div className={CardCssModule["content"]}>{children}</div>;
}
