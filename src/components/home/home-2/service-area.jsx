import service_two_data from "@/data/service-two-data";
import Link from "next/link";
import React from "react";

const ServiceArea = () => {
  return (
    <>
      <section
        className="services-area pt-120 pb-105 theme-light-bg "
        style={{
          backgroundImage: `url(/assets/img/shape/shape-bg-01.png)`,
        }}
      >
        <div className="container">
          <div className="row align-items-end  mb-45">
            <div className="col-lg-12 col-md-12 col-12">
              <div className="tp-section">
                <h3 className="tp-section__title mb-30 text-white">Offerings</h3>
              </div>
              <div className="services-link text-md-start text-lg-start mb-30 ">
                <span className="text-white">
                  Our cutting-edge XNA technology and isobDNA™ platform enable
                  highly sensitive, precise, and cost-efficient detection of
                  genetic mutations across various genomic platforms. This
                  innovation firmly establishes our leadership in the field of
                  precision diagnostics.
                  <br />
                  <br />
                  Our comprehensive diagnostic portfolio includes RadTox™, ColoScape™, and Oncuria®, along with an extensive range of infectious disease tests such as HPV and MonkeyPox diagnostics. These solutions offer unparalleled clinical accuracy and economic value, empowering healthcare providers and improving patient outcomes globally.
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            {service_two_data.map((item) => (
              <div key={item.id} className="col-xl-3 col-md-4 col-md-6 col-12">
                <div
                  className={`tp-services-box  ${item.color} text-center mb-25 wow fadeInUp`}
                  data-wow-delay=".8s"
                >
                  <div
                    className={`tp-services-box__icon ${item.icon_color} mb-40`}
                  >
                    <i className={`${item.icon}`}></i>
                  </div>
                  <div className="tp-services-box__content">
                    <h4 className="tp-services-box__title mb-30">
                      <Link href="/services-details">{item.title}</Link>
                    </h4>
                    <div className="tp-services-box__btn">
                      <a className={`tp-btn-hexa ${item.dot}`} href="#">
                        <i className="fa-solid fa-ellipsis"></i>
                      </a>
                    </div>
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

export default ServiceArea;