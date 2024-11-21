import Link from "next/link";
import React from "react";


// choose data
const choose = [
  {
    id: 1,
    color: "",
    icon: "flaticon-chemistry", // Retained original if it exists; replace if necessary
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
    icon: "flaticon-building", // Replace with a globe-related icon if available
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
    icon: "flaticon-experiment", // Replace with an innovation/R&D-related icon if necessary
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
    icon: "flaticon-blood-test", // Replace with a CLIA-related icon if necessary
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
                Our team of world-class scientists, clinicians, and industry experts is dedicated to advancing precision medicine through continued investment in research and development, strategic partnerships, and global expansion.
                </h6>
              </div>
            </div>
          </div>
          <div className="row">
            {choose.map((item) => (
              <div key={item.id} className="col-xl-3 col-md-6">
                <div
                  className="tp-choose__item ml-75 mb-100 wow fadeInUp"
                  data-wow-delay=".8s"
                >
                   <div className={`tp-choose__icon ${item.color} mb-40 text-center`}>
                    <span className="text-center"><i className={item.icon}></i></span>
                  </div>
                 
                  <div className="tp-choose__content text-center">
                    <h4 className="tp-choose__title mb-20">{item.title}</h4>
                    <p>{item.des}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row text-center">
            <div className="col-lg-12">
              <div className="tp-choose-option">
                <span>
                  Laboratories Used For Scientific Research :
                  <Link href="/">
                    Take Many Forms<i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Specialists;
