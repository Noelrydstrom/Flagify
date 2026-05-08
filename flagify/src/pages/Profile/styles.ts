import styled from "styled-components";
import { colors } from "../../theme/colors";
import { breakpoints } from "../../components/Navbar/styles";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${colors.background};
  padding: 2rem;
  top: -19rem;
  left: -6rem;
  
  @media (max-width: ${breakpoints.md}) {
  padding: 1rem;
}
`;


export const Avatar = styled.img`
  width: 180px;
  height: 180px;
  vw: 180px;
  border-radius: 50%;
  border: 3px solid ${colors.cardTitle};
  
  @media (max-width: ${breakpoints.md}) {
    width: 80px;
    height: 80px;
  }
`;

export const TagWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Username = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: ${colors.textPrimary};

  @media (max-width: ${breakpoints.md}) {
    font-size: 1.2rem;
  }
`;

export const CopyButton = styled.button`
  background-color: ${colors.secondary};
  color: ${colors.textPrimary};
  border: none;
  padding: 0.3rem 0.6rem;
  border-radius: 0.5rem;
  font-size: 2rem;
  cursor: pointer;

  &:hover {
    background-color: ${colors.primary};
  }

  @media (max-width: ${breakpoints.md}) {
    font-size: 1.2rem;
    padding: 0.2rem 0.4rem;
  }
`;
