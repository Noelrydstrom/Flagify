// src/pages/HomePage/HomePage.tsx
import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import {
  HomePageWrapper,
  HomePageHeader,
} from "./styles";
import { GuessTheFlagCard } from "../../components/GuessTheFlagCard/GuessTheFlagCard";
import { Button } from "../../components/Button/Button";

export const HomePage: FC = () => {
  const navigate = useNavigate();

  const handlePlayNow = () => {
    navigate("/game");
  };

  return (
    <HomePageWrapper>
      <HomePageHeader>Welcome to Flagify! 😁</HomePageHeader>
        <GuessTheFlagCard title="Guess the Flag 🏳️?">
          <p>Try to guess the country by its flag!</p>
          <Button onClick={handlePlayNow}>Play Now</Button>
        </GuessTheFlagCard>
    </HomePageWrapper>
  );
};

export default HomePage;
