import { type FC, type ReactNode } from "react";
import {
    CardWrapper,
} from "./styles";


type GuessTheFlagCardProps = {
  title: string;
  children?: ReactNode;
};

export const GuessTheFlagCard: FC<GuessTheFlagCardProps> = ({ title, children }) => {
  return (
    <CardWrapper>
      <h2>{title}</h2>
      {children}
    </CardWrapper>
  );
};

export default GuessTheFlagCard;
