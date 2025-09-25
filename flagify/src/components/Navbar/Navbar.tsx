import { type FC } from "react";
import { useNavigate } from "react-router-dom";
import {
Sidebar,
NavList,
NavItem,
Logo,
} from "./styles";

export const Navbar: FC = () =>  {
  const navigate = useNavigate();
  const navItems = [
  { name: "🧑‍🦲Profile", path: "/profile" },
  { name: "⚙️Settings", path: "/settings" },
  { name: "⬅Logout", path: "/logout" },
];


  return (
     <Sidebar>
      <Logo onClick={() => navigate("Home")}>Flagify🏳️</Logo>
        <NavList>
        {navItems.map((item) => (
          <NavItem
            key={item.name}
            onClick={() => navigate(item.path)}
          >
        {item.name}
          </NavItem>
        ))}
        </NavList>
    </Sidebar>
  );
};

export default Navbar;
