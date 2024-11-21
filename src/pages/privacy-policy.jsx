import ProjectDetails from '@/components/project-details/privacy-policy';
import SEO from '@/components/seo';
import LayoutTwo from '@/layout/layout-2';
import Wrapper from '@/layout/wrapper';
import React from 'react';

const index = () => {
    return (
        <Wrapper>
            <SEO
                pageTitle="Privacy Policy"
                description="Learn about HomeHealth's commitment to safeguarding your personal data and our privacy practices in compliance with legal standards."
                keywords="privacy policy, data protection, HomeHealth privacy, personal data usage, secure healthcare"
                ogTitle="Privacy Policy - HomeHealth"
                ogDescription="Understand how HomeHealth collects, uses, and protects your personal information while delivering healthcare services."
                ogUrl="/privacy-policy"
            />
            <LayoutTwo>
                <ProjectDetails />
            </LayoutTwo>
        </Wrapper>
    );
};

export default index;