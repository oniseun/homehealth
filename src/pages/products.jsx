import SEO from "@/components/seo";
import Shop from "@/components/shop";
import LayoutTwo from "@/layout/layout-2";
import Wrapper from "@/layout/wrapper";
import React from "react";

const index = () => {
  const pageTitle = "Products";
  const description = `
    Discover HomeHealth's innovative range of diagnostic and screening solutions. 
    Explore products like ColoScape™, OptiSeq™ NGS Panels, Oncuria®, QClamp® Mutation Detection, 
    and advanced COVID-19 testing kits for modern healthcare diagnostics.
  `;
  const keywords = `
    Colorectal Cancer Screening, ColoScape™, Oncuria®, QClamp®, 
    OptiSeq™ NGS Panels, Pan-Cancer Monitoring, COVID-19 Testing Kits, 
    Healthcare Diagnostics, Bladder Cancer Diagnosis, SARS-CoV-2 Antigen Test
  `;
  const ogUrl = "/products";

  return (
    <Wrapper>
      <SEO
        pageTitle={pageTitle}
        description={description}
        keywords={keywords}
        ogTitle={pageTitle}
        ogDescription={description}
        ogUrl={ogUrl}
      />
      <LayoutTwo>
        <Shop />
      </LayoutTwo>
    </Wrapper>
  );
};

export default index;