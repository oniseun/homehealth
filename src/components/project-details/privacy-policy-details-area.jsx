
import React from "react";
import contact_data from "@/data/contact-data";

const ProjectDetailsArea = () => {

  return (
    <>
      <section className="project-area pt-125 pb-35">
        <div className="container">
          <div className="row mb-40">
            <div className="col-lg-6 col-md-6">
              <div
                className="tpoverview mb-60 wow fadeInLeft"
                data-wow-delay=".2s"
              >
                <h5 className="tpproject-title mb-50">Overview</h5>
                <p>
                  Date: <span>Updated on November 20, 2024</span>
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div
                className="tpviewtext mb-60 wow fadeInRight"
                data-wow-delay=".2s"
              >
              <p className="tpviewtext__para">
                At HomeHealth, your privacy is our top priority. This Privacy
                Policy provides details on how we collect, use, and safeguard
                your personal data. By accessing our website, you agree to the
                data practices outlined in this policy.
              </p>
                <p className="tpviewtext__para">
                  Our policy reflects our dedication to exceeding privacy
                  standards, ensuring your trust in our handling of personal
                  data. We encourage frequent reviews of this policy to stay
                  updated on any modifications.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div
                className="tpprothumb mb-120 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <img
                  src="/assets/img/gallery/project-01.jpg"
                  alt="privacy-policy-thumb"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div
                className="tpprosolution mb-40 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <h5 className="tpproject-title mb-50">Information We Collect</h5>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div
                className="tpprosolution pb-40 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <p>
                  We may collect information you voluntarily provide, such as
                  your name, contact details, and payment information when
                  accessing our services or completing forms. Additionally, we
                  gather non-personal data like browser types, IP addresses, and
                  demographic details to enhance our offerings.
                </p>
                <p>
                  Information is only collected for intended purposes, such as
                  delivering requested services or improving user experiences on
                  our platform.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div
                className="tpprosolution mb-40 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <h5 className="tpproject-title mb-50">Why We Collect Data</h5>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div
                className="tpprosolution pb-40 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <p>
                  HomeHealth gathers data to better understand your needs and
                  deliver tailored services. Your data helps us:
                </p>
                <ul>
                  <li>Enhance our services and products.</li>
                  <li>Send promotional content with your consent.</li>
                  <li>Conduct surveys for feedback and improvement.</li>
                  <li>Personalize our website to your preferences.</li>
                </ul>
                <p>
                  Information is stored only as long as necessary, based on
                  factors like legal requirements, operational needs, and your
                  preferences.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div
                className="tpprosolution mb-40 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <h5 className="tpproject-title mb-50">Security Measures</h5>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div
                className="tpprosolution pb-40 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <p>
                  We use advanced security measures to protect your data,
                  including encryption for online transactions and strict
                  access controls for stored data. Our systems comply with
                  industry standards to prevent unauthorized access, ensuring
                  your information remains secure.
                </p>
                <p>
                  For queries about our policy, please contact us at:
                  <br />
                  {contact_data[0].address}
                  <br />
                  <a href={`tel:${contact_data[0].phone}`}>
                    {contact_data.phone}
                  </a>
                  <br />
                  <a href={`mailto:${contact_data[0].email}`}>
                    {contact_data[0].email}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default ProjectDetailsArea;