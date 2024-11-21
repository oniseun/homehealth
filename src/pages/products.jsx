import SEO from "@/components/seo";
import Shop from "@/components/shop";
import Layout from "@/layout/layout";
import LayoutTwo from "@/layout/layout-2";
import Wrapper from "@/layout/wrapper";
import React from "react";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Shope" />
      <LayoutTwo>
      <Shop />
      </LayoutTwo>
    </Wrapper>
  );
};

export default index;
