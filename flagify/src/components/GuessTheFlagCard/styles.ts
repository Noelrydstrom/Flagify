import styled from "styled-components";
import { colors } from "../../theme/colors";

export const CardWrapper = styled.div`
  background: linear-gradient(
    145deg,
    ${colors.surface},
    ${colors.cardbackground}
  );
  padding: 2rem;
  border-radius: 1.25rem;
  box-shadow:
    0 8px 20px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
  max-width: 480px;
  width: 100%;
  margin: 2.5rem auto;
  text-align: center;
  color: ${colors.textPrimary};
  transition: all 0.3s ease;

  /* Subtle hover effect */
  &:hover {
    transform: translateY(-4px);
    box-shadow:
      0 10px 25px rgba(0, 0, 0, 0.5),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
  }

  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: ${colors.cardTitle};
    margin-bottom: 1rem;
    letter-spacing: 0.5px;
    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
  }

  p {
    font-size: 1.1rem;
    color: ${colors.textSecondary};
    margin-bottom: 1.25rem;
    line-height: 1.6;
  }

  /* Optional subtle border glow */
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(4px);
`;
