import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const hero_slider = [
  {
    id: 1,
    title: (
      <>
        Empowering Africa's <br /> Healthcare Future <br /> with Innovation
      </>
    ),
    des: (
      <>
        Pioneering clinical research to address Africa's unique challenges. <br />
        Transforming lives through collaboration and biotechnology.
      </>
    ),
    appointment: "Learn More",
    about: "Our Mission",
    img_1: "/assets/img/slider/homehealth-bg-1.jpg",
    img_2: "/assets/img/slider/homehealth-bg-2.png",
  },
  {
    id: 2,
    title: (
      <>
        Advancing Healthcare <br /> Standards <br /> Across Africa
      </>
    ),
    des: (
      <>
        Driving sustainable health solutions through ethical research and <br />
        cutting-edge technology for African communities.
      </>
    ),
    appointment: "Learn More",
    about: "Our Vision",
    img_1: "/assets/img/slider/homehealth-bg-3.jpg",
    img_2: "/assets/img/slider/homehealth-bg-4.png",
  },
  {
    id: 3,
    title: (
      <>
        Building a Healthier <br /> Africa, One <br /> Breakthrough at a Time
      </>
    ),
    des: (
      <>
        Empowering communities with affordable, effective, and <br />
        life-changing medical solutions tailored to local needs.
      </>
    ),
    appointment: "Explore More",
    about: "Our Research",
    img_1: "/assets/img/slider/homehealth-bg-5.jpg",
    img_2: "/assets/img/slider/homehealth-bg-6.png",
  },
];


// slider setting
const setting = {
  // Optional parameters
  slidesPerView: 1,
  effect: "fade",
  autoplay: {
    delay: 4000,
    disableOnInteraction: true,
  },
  navigation: {
    nextEl: ".slider-n",
    prevEl: ".slider-p",
  },
};

// social_links
const social_links = [
  // {
  //   name: "facebook",
  //   link: "http://facebook.com",
  //   target: "_blank",
  //   icon: "fab fa-facebook-f",
  //   color: "facebook-2",
  // },
  // {
  //   name: "youtube",
  //   link: "https://www.youtube.com/",
  //   target: "_blank",
  //   icon: "fab fa-youtube",
  //   color: "youtub-2",
  // },
  // {
  //   name: "twitter",
  //   link: "http://twitter.com",
  //   target: "_blank",
  //   icon: "fab fa-twitter",
  //   color: "twitter-2",
  // },
];
const HeroBanner = () => {
  const [isLoop, setIsLoop] = useState(false);
  useEffect(() => {
    setIsLoop(true);
  }, []);
  return (
    <>
      <section className="slider-area slider-tp-top pt-100 p-relative">
        <div className="slider-social">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-10 d-none d-md-block">
                <div className="slider-content__social">
                  {social_links.map((link, i) => (
                    <Link
                      key={i}
                      target={link.target}
                      className={link.color}
                      href={link.link}
                    >
                      <i className={link.icon}></i> {link.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="col-lg-6 col-md-2 col-12 d-none d-md-block">
                <div className="slider-content__arrow d-flex align-items-center">
                  <div className="slider-p">
                    <i className="fa-regular fa-arrow-left"></i>
                  </div>
                  <div className="slider-n">
                    <i className="fa-regular fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Swiper
          modules={[Navigation]}
          loop={isLoop}
          {...setting}
          className="swiper-container tp-slider slider-active"
        >
          {hero_slider.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="swiper-slide bg-white">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6 col-12 order-2 order-lg-1 align-top">
                      <div className="slider-content pt-60">
                        <h2 className="slider-content__title mb-45">
                          {item.title}
                        </h2>
                        <p>{item.des}</p>
                        <div className="slider-content__btn mb-165">
                          <Link className="tp-btn" href="/contact">
                            {item.appointment}
                          </Link>
                          <Link className="tp-btn-second ml-25" href="/about">
                            {item.about}
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 order-1 order-lg-2 align-top">
                        <img src={item.img_1} alt="slider-img" className="rounded-pill border border-success img-fluid shadow-lg" />

                      {/* <div className="slider-content__shape d-none d-md-block">
                        <img src={item.img_2} alt="slider-shape" />
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default HeroBanner;
