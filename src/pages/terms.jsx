import ProjectDetails from '@/components/project-details/terms';
import SEO from '@/components/seo';
import LayoutTwo from '@/layout/layout-2';
import Wrapper from '@/layout/wrapper';
import React from 'react';

const index = () => {
    return (
        <Wrapper>
            <SEO
                pageTitle="Terms and Conditions"
                description="Explore the terms and conditions for using HomeHealth's website and services, including legal obligations and user rights."
                keywords="terms and conditions, HomeHealth terms, website usage policy, legal terms, user rights"
                ogTitle="Terms and Conditions - HomeHealth"
                ogDescription="Understand the legal guidelines and obligations when using HomeHealth's website and services."
                ogUrl="/terms"
            />
            <LayoutTwo>
                <ProjectDetails />
            </LayoutTwo>
        </Wrapper>
    );
};

export default index;