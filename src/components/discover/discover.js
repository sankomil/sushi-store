import React from "react";
import {
  DiscoverContainer,
  Column1,
  HeaderText,
  Subtitle,
  Column2,
  Img,
} from "./discover-elements";

export const Discover = ({ header, description, image, dark }) => {
  return (
    <>
      <DiscoverContainer>
        <Column1 dark={dark}>
          <HeaderText dark={dark}>{header}</HeaderText>
          <Subtitle>{description}</Subtitle>
        </Column1>
        <Column2 dark={dark}>
          <Img src={image} />
        </Column2>
      </DiscoverContainer>
    </>
  );
};
