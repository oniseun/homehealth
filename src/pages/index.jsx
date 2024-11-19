import React from "react";
import Layout from "@/layout/layout";
import HomeTwo from "@/components/home/home-2/hometwo";
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import LayoutTwo from "@/layout/layout-2";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Home Main" />
      <LayoutTwo>
        <HomeTwo />
      </LayoutTwo>
    </Wrapper>
  );
};

export default index;
