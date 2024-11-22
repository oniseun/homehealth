import ProductDetails from "@/components/product-details";
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import React from "react";
import Layout from "@/layout/layout";
import LayoutTwo from "@/layout/layout-2";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Product Details" />
      <LayoutTwo>
      <ProductDetails />
      </LayoutTwo>
    </Wrapper>
  );
};

export default index;
