import type { FC } from "react";
import {
    HomePageWrapper,
    Header,
    HomePageSection,
} from "./styles";
import { HomeCard } from "../../components/HomeCard/HomeCard";

export const HomePage: FC = () =>  {

  return (
    <HomePageWrapper>
        <Header>Home</Header>
        <HomePageSection>
            <HomeCard title="Guess the Flag 🏳️?">
                <p>Try to guess the country by its flag!</p>
                {/* You can add buttons, images, or interactive elements here */}
            </HomeCard>
        </HomePageSection>
    </HomePageWrapper>
  );
};

export default HomePage;