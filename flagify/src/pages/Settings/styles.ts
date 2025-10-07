import styled from "styled-components";
import { colors } from "../../theme/colors";

export const Container = styled.div`
  min-height: 100vh;
  background-color: ${colors.background};
  color: ${colors.textPrimary};
  padding: 0rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -4rem;
  margin-left: -7rem;
`;

export const Header = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: ${colors.textPrimary};
  margin-bottom: 0.5rem;
  text-align: left;
`;

export const SubHeader = styled.p`
  font-size: 1rem;
  color: ${colors.textSecondary};
  margin-bottom: 3rem;
  text-align: left;
`;

export const Card = styled.div`
  flex-direction: column;
  align-items: left;
  background-color: ${colors.surface};
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
  padding: 2rem;
  margin-bottom: 2rem;
  width: 100%;
  max-width: 720px;
  transition: all 0.25s ease-in-out;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.35);
  }
`;

export const CardTitle = styled.h2`
  font-size: 1.25rem;
  color: ${colors.cardTitle};
  margin-bottom: 1rem;
  text-align: left;
  letter-spacing: 0.5px;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;
  width: 100%;
  max-width: 720px;
`;

export const Button = styled.button<{ variant?: "primary" | "outline" }>`
  background-color: ${(p) =>
    p.variant === "outline" ? "transparent" : colors.secondary};
  color: ${(p) =>
    p.variant === "outline" ? colors.textPrimary : "#ffffff"};
  border: ${(p) =>
    p.variant === "outline"
      ? `1px solid ${colors.textSecondary}`
      : "none"};
  border-radius: 8px;
  padding: 0.6rem 1.2rem;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.9;
    background-color: ${(p) =>
      p.variant === "outline"
        ? "rgba(255,255,255,0.08)"
        : colors.primary};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const Input = styled.input`
  background-color: ${colors.background};
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: ${colors.textPrimary};
  padding: 0.6rem 0.8rem;
  border-radius: 8px;
  width: 220px;
  font-size: 0.9rem;
  transition: all 0.2s ease-in-out;

  &:focus {
    border-color: ${colors.secondary};
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.3);
    outline: none;
  }

  &::placeholder {
    color: ${colors.textSecondary};
  }
`;
