import { colors } from "../../theme/colors";
import  styled from "styled-components";

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
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 3.4rem;
  font-weight: 750;
  background: linear-gradient(90deg, ${colors.primary}, ${colors.secondary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;
  transition: transform 0.2s;
`;

export const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 10;
  font-size: 25px;
  justify-content: space-between;
  margin-left: -1rem;
`;

export const NavItem = styled.li`
  padding: 1rem 1rem 1rem 1.5rem;
  color: ${colors.textPrimary};
  cursor: pointer;
  border-radius: 0.25rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;