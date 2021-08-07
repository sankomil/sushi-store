import React from "react";
import {
  NavLogo,
  NavbarContainer,
  NavOuter,
  MobileIcon,
  NavMenu,
  NavLink,
  NavItem,
} from "./navbar-elements";
import { FaBars } from "react-icons/fa";

export const Navbar = () => {
  return (
    <>
      <NavOuter>
        <NavbarContainer>
          <NavLogo to="/">Sushi</NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLink to="about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="discover">Discover</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="purchase">Purchase</NavLink>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </NavOuter>
    </>
  );
};
