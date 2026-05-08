import { type FC, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Sidebar,
  NavListBottom,
  NavListTop,
  NavItem,
  Logo,
  Hamburger,
  Overlay,
} from "./styles";

export const Navbar: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [open, setOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const handleNavigate = (path: string) => {
    navigate(path);
    setOpen(false); // 👈 close mobile menu after click
  };

  const navItemsTop = [{ name: "🧑‍🦲Profile", path: "/profile" }];

  const navItemsBottom = [
    { name: "⚙️Settings", path: "/settings" },
    { name: "⬅Logout", path: "/logout" },
  ];

  return (
    <>
      <Hamburger onClick={() => setOpen(true)}>☰</Hamburger>
      {open && <Overlay onClick={() => setOpen(false)} />}

      <Sidebar open={open}>
        <NavListTop>
          <Logo onClick={() => handleNavigate("/home")}>Flagify🏳️</Logo>

          {navItemsTop.map((item) => (
            <NavItem
              key={item.name}
              onClick={() => handleNavigate(item.path)}
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
              onClick={() => handleNavigate(item.path)}
              active={isActive(item.path)}
            >
              {item.name}
            </NavItem>
          ))}
        </NavListBottom>
      </Sidebar>
    </>
  );
};

export default Navbar;