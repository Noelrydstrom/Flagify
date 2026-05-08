import styled from "styled-components";
import { colors } from "../../theme/colors";

/* Reusable breakpoints */
export const breakpoints = {
  sm: "480px",  // mobile portrait
  md: "768px",  // tablet
  lg: "1024px", // desktop
  xl: "1440px", // large screens
};

export const Sidebar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100vh;
  background-color: ${colors.surface};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0rem;
  font-size: 3.4rem;
  font-weight: 750;
  background: linear-gradient(90deg, ${colors.primary}, ${colors.secondary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;
  transition: transform 0.2s, font-size 0.2s;
  margin-bottom: 2rem;
  margin-left: 1rem;
  margin-top: -1rem;

  &:hover {
    transform: scale(1.05);
  }
`;

export const NavListTop = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 25px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-left: -1rem;
`;

export const NavListBottom = styled(NavListTop)`
  margin-bottom: 2.5rem;
`;

export const NavItem = styled.li<{ active?: boolean }>`
  padding: 1rem 1rem 1rem 1.5rem;
  color: ${colors.textPrimary};
  cursor: pointer;
  border-radius: 0.25rem;
  transition: background-color 0.2s, padding 0.2s;

  background-color: ${({ active }) =>
    active ? "rgba(255, 255, 255, 0.15)" : "transparent"};

  font-weight: ${({ active }) => (active ? "600" : "400")};

  border-left: ${({ active }) =>
    active ? `10px solid ${colors.primary}` : "10px solid transparent"};

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
