import styled from "styled-components";
import { colors } from "../../theme/colors";

/* Reusable breakpoints */
export const breakpoints = {
  sm: "480px",  // mobile portrait
  md: "768px",  // tablet
  lg: "1024px", // desktop
  xl: "1440px", // large screens
};

export const Sidebar = styled.nav<{ open?: boolean }>`
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
  transition: transform 0.3s ease;
  z-index: 1000;

  /* 🖥 DESKTOP (default) */
  transform: translateX(0);

  /* 📱 TABLET + MOBILE */
  @media (max-width: ${breakpoints.md}) {
    transform: ${({ open }) =>
      open ? "translateX(0)" : "translateX(-100%)"};
  }
`;

export const Hamburger = styled.button`
  display: none;

  @media (max-width: ${breakpoints.md}) {
    display: block;
    position: fixed;
    top: 1rem;
    left: 1rem;
    z-index: 1101;
    font-size: 2rem;
    background: none;
    border: none;
    color: ${colors.primary};
    cursor: pointer;
    font: bold 2rem "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
`;

export const Overlay = styled.div`
  display: none;

  @media (max-width: ${breakpoints.md}) {
    display: block;
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 900;
  }
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

  @media (max-width: ${breakpoints.md}) {
    font-size: 2.5rem;
    margin-left: 0.5rem;
    margin-top: 3.5rem;
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

  @media (max-width: ${breakpoints.md}) {
    padding: 0.8rem 1rem 0.8rem 1.2rem;
  }
`;
