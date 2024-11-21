import React from "react";
import Layout from "@/layout/layout";
import HomeTwo from "@/components/home/home-2/hometwo";
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import LayoutTwo from "@/layout/layout-2";

const index = () => {
  return (
    <Wrapper>
      <SEO
        pageTitle="Home"
        description="Welcome to HomeHealth, where we provide comprehensive healthcare diagnostics and laboratory services tailored to your needs."
        keywords="home, healthcare, diagnostics, clinical research, laboratory services, HomeHealth solutions"
        ogTitle="Home - HomeHealth"
        ogDescription="Discover HomeHealth's state-of-the-art healthcare and diagnostic services designed to enhance your well-being."
        ogUrl="/"
      />
      <LayoutTwo>
        <HomeTwo />
      </LayoutTwo>
    </Wrapper>
  );
};

export default index;