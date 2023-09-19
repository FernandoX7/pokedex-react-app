import classes from './Card.module.css';
import { ReactNode } from "react";

interface CardProps {
  className?: string;
  children: ReactNode;
}

const Card = (props: CardProps) => {
  return (
    <div className={`${classes.Card} ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Card;