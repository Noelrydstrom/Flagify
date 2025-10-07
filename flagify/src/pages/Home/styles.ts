import styled from "styled-components";
import { colors } from "../../theme/colors";

export const HomePageWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const HomePageHeader = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  color: ${colors.secondary};
  text-align: center;
  margin-bottom: 2rem;
  text-shadow: 0 3px 10px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;
