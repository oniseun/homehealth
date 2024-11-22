import SEO from "@/components/seo";
import ServiceDetails from "@/components/services/service-details/service-details";
import Layout from "@/layout/layout";
import LayoutTwo from "@/layout/layout-2";
import Wrapper from "@/layout/wrapper";
import React from "react";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Service Details" />
      <LayoutTwo>
      <ServiceDetails />
      </LayoutTwo>
    </Wrapper>
  );
};

export default index;
