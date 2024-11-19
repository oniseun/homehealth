import About from "@/components/about/about";
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import React from "react";
import Layout from "@/layout/layout";
import LayoutTwo from "@/layout/layout-2";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="About" />
      <LayoutTwo>
      <About />
      </LayoutTwo>
    </Wrapper>
  );
};

export default index;
