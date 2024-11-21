import ProjectDetails from "@/components/project-details/technologies";
import SEO from "@/components/seo";
import LayoutTwo from "@/layout/layout-2";
import Wrapper from "@/layout/wrapper";
import React from "react";
import { useRouter } from "next/router";
import technologies_data from "@/data/technologies-data"; // Replace with your data file

const index = () => {
  const router = useRouter();
  const { id } = router.query;

  // Find the specific project data
  const projectData = technologies_data.find((item) => item.id === id) || {};
  const {
    main_title = "Project Details",
    overview = "Explore our cutting-edge technologies.",
    category = "Technology",
  } = projectData;

  return (
    <Wrapper>
      <SEO
        pageTitle={`${main_title} - Technology`}
        description={overview}
        ogTitle={`${main_title} - Technology`}
        ogDescription={overview}
        ogUrl={`/technologies/${id}`}
        keywords={`${main_title}, ${category}, HomeHealth Technologies, Innovations`}
      />
      <LayoutTwo>
        <ProjectDetails />
      </LayoutTwo>
    </Wrapper>
  );
};

export default index;