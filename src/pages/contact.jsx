import ContactUs from "@/components/contact/contact";
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import React from "react";
import Layout from "@/layout/layout";
import LayoutTwo from "@/layout/layout-2";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"contact us"} />
      <LayoutTwo>
      <ContactUs />
      </LayoutTwo>
    </Wrapper>
  );
};

export default index;
