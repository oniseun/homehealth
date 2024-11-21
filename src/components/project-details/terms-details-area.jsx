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
                  Welcome to HomeHealth's terms of use. By accessing our
                  platform, you agree to these terms and conditions, which
                  outline the proper use of our website, rights, and
                  responsibilities. If you do not accept these terms, please
                  refrain from using our services.
                </p>
                <p className="tpviewtext__para">
                  We recommend reviewing this policy periodically to stay
                  informed about updates or modifications. These terms aim to
                  ensure a secure and reliable user experience for all visitors.
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
                <h5 className="tpproject-title mb-50">Use of the Website</h5>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div
                className="tpprosolution pb-40 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <p>
                  Visitors can access non-restricted areas of our website for
                  personal, non-commercial purposes. Any unauthorized copying,
                  distribution, or alteration of content is prohibited. If you
                  wish to use our content differently, please contact us for
                  approval.
                </p>
                <p>
                  External links are provided for your convenience; however,
                  HomeHealth is not liable for the content or practices of
                  third-party websites. Users interact with such resources at
                  their own discretion.
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
                <h5 className="tpproject-title mb-50">Intellectual Property</h5>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div
                className="tpprosolution pb-40 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <p>
                  All content, trademarks, and intellectual property on this
                  website are owned by HomeHealth or its licensors. Unauthorized
                  reproduction or modification is strictly prohibited.
                </p>
                <p>
                  Our brand names, logos, and related materials cannot be used
                  without prior written consent.
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
                <h5 className="tpproject-title mb-50">Liability Disclaimer</h5>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div
                className="tpprosolution pb-40 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <p>
                  HomeHealth is not responsible for inaccuracies or omissions on
                  our website. Users rely on our content at their discretion. We
                  disclaim liability for any direct or indirect damages arising
                  from the use of our website.
                </p>
                <p>
                  Despite efforts to maintain accuracy, we do not guarantee the
                  reliability of the content provided on this platform.
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
                <h5 className="tpproject-title mb-50">Governing Laws</h5>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div
                className="tpprosolution pb-40 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <p>
                  These terms are governed by the laws of United States of America, and disputes will be resolved under its exclusive
                  jurisdiction. By using this site, you consent to these
                  governing laws.
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
                <h5 className="tpproject-title mb-50">Contact Information</h5>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div
                className="tpprosolution pb-40 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <p>
                  For questions about these terms, reach us via:
                  <br />
                  <strong>Address:</strong> {contact_data[0].address}
                  <br />
                  <strong>Phone:</strong>{" "}
                  <a href={`tel:${contact_data[0].phone}`}>
                    {contact_data[0].phone}
                  </a>
                  <br />
                  <strong>Email:</strong>{" "}
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