import styled from "styled-components";
import { colors } from "../../theme/colors";

export const Container = styled.div`
  position: relative;
  top: -10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 1rem;
  background-color: ${colors.background};
  transform: translateY(-10rem);
  width: 100%;
    margin-top: -4rem;
    margin-left: -7rem;
    padding: 2rem;
`;


export const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 3px solid ${colors.cardTitle};
`;

export const TagWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Username = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${colors.textPrimary};
`;

export const CopyButton = styled.button`
  background-color: ${colors.secondary};
  color: ${colors.textPrimary};
  border: none;
  padding: 0.3rem 0.6rem;
  border-radius: 0.5rem;
  font-size: 0.9rem;
  cursor: pointer;

  &:hover {
    background-color: ${colors.primary};
  }
`;
