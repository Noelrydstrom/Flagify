import { colors } from "../../theme/colors";
import  styled from "styled-components";

export const HomePageWrapper = styled.nav`
    flex: 1;
    margin: 0;
`;

export const HomePageSection = styled.nav`
    background-color: ${colors.surface || "#ffffff"}; /* white card */
  padding: 3rem;
  border-radius: 1rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1); /* subtle shadow */
  max-width: 800px;
  margin: 3rem auto; /* centers horizontally with space on top */
  
  display: flex;
  flex-direction: column;
  align-items: center; /* horizontally center content */
  text-align: center;
`;

export const Header = styled.nav`
    color: ${colors.textPrimary};
    text-align: center;
    font-size: 7rem;
`;