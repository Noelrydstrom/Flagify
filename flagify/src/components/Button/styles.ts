// src/components/Button/styles.ts
import styled from "styled-components";
import { colors } from "../../theme/colors";

export const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-weight: 500;
  background-color: ${colors.secondary};
  color: ${colors.textPrimary};
  cursor: pointer;
  font-size: 1.5rem;
  border: none;
  transition: background-color 0.2s ease, transform 0.1s ease, box-shadow 0.2s ease;

  &:hover {
    background-color: ${colors.primary};
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
  }

  &:active {
    transform: scale(0.97);
    background-color: ${colors.primary};
  }

  &:focus {
    outline: 2px solid ${colors.accent};
    outline-offset: 2px;
  }

  &:disabled {
    background-color: ${colors.surface};
    color: ${colors.textSecondary};
    cursor: not-allowed;
    opacity: 0.6;
  }
`;
