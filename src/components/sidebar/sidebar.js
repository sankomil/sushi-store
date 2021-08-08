import React from "react";
import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./sidebar-elements";

export const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
      <SideBarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink onClick={toggle} to="about">
              About
            </SidebarLink>
            <SidebarLink onClick={toggle} to="discover">
              Discover
            </SidebarLink>
            <SidebarLink onClick={toggle} to="Purchase">
              Purchase
            </SidebarLink>
          </SidebarMenu>
        </SidebarWrapper>
      </SideBarContainer>
    </>
  );
};
