import ContactUs from "@/components/contact/contact";
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import React from "react";
import LayoutTwo from "@/layout/layout-2";

const index = () => {
  return (
    <Wrapper>
      <SEO
        pageTitle="Contact Us"
        description="Get in touch with HomeHealth for inquiries, support, or collaboration opportunities. We're here to assist you."
        keywords="Contact HomeHealth, customer support, healthcare services, HomeHealth inquiries"
        ogTitle="Contact HomeHealth"
        ogDescription="Reach out to HomeHealth for any questions, support, or to explore partnership opportunities in healthcare innovation."
        ogUrl="/contact"
      />
      <LayoutTwo>
        <ContactUs />
      </LayoutTwo>
    </Wrapper>
  );
};

export default index;