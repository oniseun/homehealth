
import React from "react";
import AboutArea from "./about-area";
import Banner from "./banner";
import Specialists from "./specialists";
import NavTab from "./nav-tab";
import Team from "@/common/team";

const About = () => {
  return (
    <>
      <Banner />
      <AboutArea />
      <Specialists />
      <NavTab />
      <Team />
    </>
  );
};

export default About;
