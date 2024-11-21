import FAQ from "@/components/faq/faq";
import SEO from "@/components/seo";
import LayoutTwo from "@/layout/layout-2";
import Wrapper from "@/layout/wrapper";
import React from "react";

const index = () => {
  return (
    <Wrapper>
      <SEO
        pageTitle="FAQ"
        description="Find answers to frequently asked questions about HomeHealth's healthcare services, policies, and operations."
        keywords="HomeHealth FAQ, healthcare services FAQ, frequently asked questions, HomeHealth policies"
        ogTitle="FAQ - HomeHealth"
        ogDescription="Explore the most commonly asked questions about HomeHealth's innovative healthcare solutions and services."
        ogUrl="/faq"
      />
      <LayoutTwo>
        <FAQ />
      </LayoutTwo>
    </Wrapper>
  );
};

export default index;