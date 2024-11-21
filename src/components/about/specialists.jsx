import Link from "next/link";
import React from "react";

// Updated choose data
const choose = [
  {
    id: 1,
    color: "",
    icon: "fa-solid fa-check-circle", // Icon for quality assurance
    title: (
      <>
        High Quality <br />
        Diagnostics
      </>
    ),
    des: (
      <>
        We prioritize accuracy and reliability in every test, ensuring you
        receive the highest quality results for effective healthcare decisions.
      </>
    ),
  },
  {
    id: 2,
    color: "pink-icon",
    icon: "fa-solid fa-bolt", // Icon for efficiency
    title: (
      <>
        Fast and Reliable <br />
        Results
      </>
    ),
    des: (
      <>
        Our advanced technologies ensure quick turnaround times without
        compromising the precision and reliability of your diagnostics.
      </>
    ),
  },
  {
    id: 3,
    color: "green-icon",
    icon: "fa-solid fa-headset", // Icon for customer support
    title: (
      <>
        24/7 Customer <br /> Support
      </>
    ),
    des: (
      <>
        Dedicated support team available around the clock to address your
        concerns and provide guidance every step of the way.
      </>
    ),
  },
  {
    id: 4,
    color: "sky-icon",
    icon: "fa-solid fa-users", // Icon for expert team
    title: (
      <>
        Expert <br /> Team
      </>
    ),
    des: (
      <>
        Our team comprises skilled scientists, clinicians, and technicians
        committed to advancing precision diagnostics and healthcare.
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
                  Our Commitment to Excellence
                </span>
                <h3 className="tp-section__title title-white mb-85">
                  Why Choose Us
                </h3>
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
                  <div className={`tp-choose__icon ${item.color} mb-40`}>
                    <i className={item.icon}></i>
                  </div>
                  <div className="tp-choose__content">
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