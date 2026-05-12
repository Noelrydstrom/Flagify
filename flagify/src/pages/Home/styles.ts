import styled from "styled-components";
import { colors } from "../../theme/colors";
import { breakpoints } from "../../components/Navbar/styles";

export const HomePageWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 2rem 4rem;
  box-sizing: border-box;

  @media (max-width: ${breakpoints.sm}) {
    padding: 1rem 2rem;
    margin-left: -19.5rem;
  }
  @media (max-width: ${breakpoints.md}) {
    padding: 1.5rem 3rem;
    margin-left: -10.5rem;
  }
`;

export const HomePageHeader = styled.h1`
  font-size: clamp(2rem, 6vw, 4rem); /* text skalas mellan 2rem och 4rem */
  font-weight: 800;
  color: ${colors.secondary};
  text-align: center;
  margin-bottom: 2rem;
  flex-direction: column;
  text-shadow: 0 3px 10px rgba(0, 0, 0, 0.5);
  transition: font-size 0.3s ease;

    @media (max-width: ${breakpoints.md}) {
    margin-bottom: 1.5rem;
    margin-right: -19.5rem;
  }
`;