import type { ReactNode } from "react";

interface CardProps {
  children?: ReactNode;
}

function Card({ children }: CardProps) {
  return <div className="border p-4 w-40 h-auto text-center">{children}</div>;
}

export default Card;
