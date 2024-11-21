import About from "@/components/about/about";
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import React from "react";
import LayoutTwo from "@/layout/layout-2";

const index = () => {
  return (
    <Wrapper>
      <SEO
        pageTitle="About Us"
        description="Learn about HomeHealth, our mission, vision, and commitment to advancing healthcare through innovative research and exceptional services."
        keywords="About HomeHealth, healthcare innovation, mission and vision, research and development, healthcare excellence"
        ogTitle="About Us - HomeHealth"
        ogDescription="Discover HomeHealth's story, values, and our unwavering dedication to improving healthcare outcomes for communities."
        ogUrl="/about"
      />
      <LayoutTwo>
        <About />
      </LayoutTwo>
    </Wrapper>
  );
};

export default index;