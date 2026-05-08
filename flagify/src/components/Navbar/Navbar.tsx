import { type FC } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
Sidebar,
NavListBottom,
NavListTop,
NavItem,
Logo,
} from "./styles";

export const Navbar: FC = () =>  {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItemsTop = [
  //Top items
  { name: "🧑‍🦲Profile", path: "/profile" },
];

  const navItemsBottom = [
  //Bottom items
  { name: "⚙️Settings", path: "/settings" },
  { name: "⬅Logout", path: "/logout" },
];


  return (
     <Sidebar>
      <NavListTop>
        <Logo onClick={() => navigate("/home")}>Flagify🏳️</Logo>
        
        {navItemsTop.map((item) => (
          <NavItem
            key={item.name}
            onClick={() => navigate(item.path)}
            active={isActive(item.path)}
          >
        {item.name}
          </NavItem>
        ))}
        </NavListTop>

        <NavListBottom>
        {navItemsBottom.map((item) => (
          <NavItem
            key={item.name}
            onClick={() => navigate(item.path)}
            active={isActive(item.path)}
          >
        {item.name}
          </NavItem>
        ))}
        </NavListBottom>
    </Sidebar>
  );
};

export default Navbar;
