import ProjectDetails from '@/components/project-details/terms';
import SEO from '@/components/seo';
import LayoutTwo from '@/layout/layout-2';
import Wrapper from '@/layout/wrapper';
import React from 'react';

const index = () => {
    return (
      <Wrapper>
            <SEO pageTitle="Project Details" />
            <LayoutTwo>
            <ProjectDetails />
            </LayoutTwo>
      </Wrapper>
    );
};

export default index;