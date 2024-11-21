import Count from "@/common/count";
import Link from "next/link";
import React from "react";

const AboutArea = () => {
  return (
    <>
      <section className="about-area pt-130 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-4 col-12">
              <div
                className="tp-about-thumb mb-60 wow fadeInLeft"
                data-wow-delay=".3s"
              >
                <div className="tp-ab-img d-flex">
                  <div className="tp-ab-main-img p-relative">
                    <img
                      src="/assets/img/about/about-bg-04.jpg"
                      alt="about-thumb"
                    />
                    <div className="about__exprience tp-ab-counter">
                      <h3 className="counter">
                        <Count add_style={true} number={12} />
                      </h3>
                      <i>
                        Years of <br />
                        Advancing Healthcare
                      </i>
                    </div>
                  </div>
                  <div className="tp-ab-shape d-none d-md-block d-lg-none d-xl-block">
                    <img
                      className="ab-shape-one"
                      src="/assets/img/about/about-bg-05.jpg"
                      alt="about-shape"
                    />
                    <img
                      className="ab-shape-two"
                      src="/assets/img/about/about-bg-06.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-8 col-12">
              <div
                className="about-content about-align mb-60 wow fadeInRight"
                data-wow-delay=".3s"
              >
                <div className="tp-section">
                  <h3 className="tp-section__title ab-title mb-25">
                    Transforming Lives Through Innovation
                  </h3>
                  <a className="tp-section__link" href="#vision-mission">
                    Read our Mission & Vision{" "}
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                  <p className="mr-20 mb-40">
                    At HomeHealth, we are dedicated to addressing Africa's unique
                    healthcare challenges through high-quality, ethically-grounded
                    clinical research. By leveraging advanced biotechnology and
                    fostering collaboration with local and international experts,
                    we strive to provide safe, effective, and affordable medical
                    solutions to communities across the continent.
                  </p>
                </div>
                <div className="tp-about__info-list ab-check-list mb-55">
                  <ul>
                    <li>
                      <i className="fa-solid fa-check"></i> Leading innovation in
                      healthcare and precision diagnostics
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i> Committed to
                      empowering African communities with advanced medical
                      solutions
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i> Collaboration with
                      local experts and global partners
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i> Dedicated to
                      knowledge sharing and capacity building
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutArea;