import { colors } from "../../theme/colors";
import  styled from "styled-components";

export const CardWrapper = styled.div`
  background-color: ${colors.background || "#ffffff"}; /* white card */
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 100%;
  margin: 2rem auto;
  text-align: center;
  
  h2 {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: ${colors.primary || "#2563eb"};
  }

  p {
    font-size: 1.1rem;
    color: ${colors.textPrimary || "#1f2937"};
  }
`;