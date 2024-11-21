import Link from "next/link";
import React from "react";


// choose data
const choose = [
  {
    id: 1,
    color: "",
    icon: "fa-solid fa-industry", // Font Awesome icon for manufacturing
    title: (
      <>
        ISO 13485 certified <br />
        GMP Manufacturing
      </>
    ),
    des: (
      <>
        Operates under strict ISO 13485 compliance to ensure high-quality GMP
        manufacturing standards for all processes and products.
      </>
    ),
  },
  {
    id: 2,
    color: "pink-icon",
    icon: "fa-solid fa-globe", // Font Awesome icon for global reach
    title: (
      <>
        Global Reach <br />
        Across Continents
      </>
    ),
    des: (
      <>
        Headquartered in California, USA, with subsidiaries and operations in
        Europe and Asia, enabling global access to precision diagnostics.
      </>
    ),
  },
  {
    id: 3,
    color: "green-icon",
    icon: "fa-solid fa-lightbulb", // Font Awesome icon for innovation/R&D
    title: (
      <>
        Innovative R&D <br />
        Capabilities
      </>
    ),
    des: (
      <>
        State-of-the-art research and development lab focused on groundbreaking
        advancements in precision diagnostics and biotechnology.
      </>
    ),
  },
  {
    id: 4,
    color: "sky-icon",
    icon: "fa-solid fa-vials", // Font Awesome icon for lab/diagnostics
    title: (
      <>
        CAP-accredited <br />
        CLIA Lab
      </>
    ),
    des: (
      <>
        Ensures rigorous compliance and high standards for testing and
        diagnostics, accredited by CAP and certified under CLIA guidelines.
      </>
    ),
  },
];

const Specialists = () => {
  return (
    <>
      <section className="choose-area theme-bg pt-120 pb-130">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-section text-center">
                <span className="tp-section__sub-title left-line right-line mb-25">
                  Global Expansion
                </span>
                <h6 className="title-white mb-85">
                  Our team of world-class scientists, clinicians, and industry
                  experts is dedicated to advancing precision medicine through
                  continued investment in research and development, strategic
                  partnerships, and global expansion.
                </h6>
              </div>
            </div>
          </div>
          <div className="row">
            {choose.map((item) => (
              <div key={item.id} className="col-xl-3 col-md-6">
                <div
                  className="tp-choose__item ml-75 mb-100 wow fadeInUp d-flex flex-column align-items-center text-center"
                  data-wow-delay=".8s"
                >
                  {/* Icon Container */}
                  <div
                    className={`tp-choose__icon ${item.color} mb-40 d-flex justify-content-center align-items-center`}
              
                  >
                    <i
                      className={item.icon}
                    ></i>
                  </div>

                  <div className="tp-choose__content text-center">
                    <h4 className="tp-choose__title mb-20">{item.title}</h4>
                    <p>{item.des}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Specialists;