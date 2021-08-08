import React from "react";
import {
  AboutContainer,
  VideoBg,
  AboutBg,
  AboutContent,
  AboutH1,
  AboutP,
} from "./about-elements";
import Video from "../../videos/glitter.mp4";

export const About = () => {
  return (
    <AboutContainer id="about">
      <AboutBg>
        <VideoBg autoPlay loop muted src={Video} type="/video/mp4" />
      </AboutBg>

      <AboutContent>
        <AboutH1>Jewelry made easy!</AboutH1>
        <AboutP>Check out our Instagram!</AboutP>
      </AboutContent>
    </AboutContainer>
  );
};
