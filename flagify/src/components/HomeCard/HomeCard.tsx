// src/components/HomeCard/HomeCard.tsx
import { type FC, type ReactNode } from "react";
import {
    CardWrapper,
} from "./styles";


type HomeCardProps = {
  title: string;
  children?: ReactNode;
};

export const HomeCard: FC<HomeCardProps> = ({ title, children }) => {
  return (
    <CardWrapper>
      <h2>{title}</h2>
      {children}
    </CardWrapper>
  );
};

export default HomeCard;
