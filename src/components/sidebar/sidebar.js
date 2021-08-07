import React from "react";
import { SideBarContainer, Icon, CloseIcon } from "./sidebar-elements";

export const Sidebar = () => {
  return (
    <>
      <SideBarContainer>
        <Icon>
          <CloseIcon />
        </Icon>
      </SideBarContainer>
    </>
  );
};
