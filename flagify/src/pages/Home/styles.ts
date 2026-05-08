import styled from "styled-components";
import { colors } from "../../theme/colors";

export const HomePageWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 2rem 4rem;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    padding: 2rem 3rem;
  }

  @media (max-width: 768px) {
    padding: 1.5rem 2rem;
  }

  @media (max-width: 480px) {
    padding: 1rem 1rem;
  }
`;

export const HomePageHeader = styled.h1`
  font-size: clamp(2rem, 6vw, 4rem); /* text skalas mellan 2rem och 4rem */
  font-weight: 800;
  color: ${colors.secondary};
  text-align: center;
  margin-bottom: 2rem;
  text-shadow: 0 3px 10px rgba(0, 0, 0, 0.5);
  transition: font-size 0.3s ease;
`;