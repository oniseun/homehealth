import VideoPopup from "@/modals/video-popup";
import Link from "next/link";
import React, { useState } from "react";

const About = () => {
  // about content data
  const about_content = {
    about_bg: "/assets/img/shape/shape-bg-05.png",
    about_img: "/assets/img/about/about-bg-04.png",
    popup_video: "https://www.youtube.com/watch?v=-BpXNPHiB2U",
    about_thumb: "/assets/img/about/about-bg-03-1.png",
    title: "Pioneering Innovation in Healthcare Solutions",
    sub_title: "About",
    des_1: (
      <>
        HomeHealth is a leading precision diagnostics and clinical research
        organization. We specialize in providing end-to-end solutions for
        advancing healthcare, empowering communities, and addressing Africa's
        unique medical challenges.
      </>
    ),
    dex_2: (
      <>
        Through groundbreaking research, cutting-edge biotechnology, and
        collaboration with global and local partners, HomeHealth delivers
        innovative and affordable solutions. Our mission is to enhance lives
        through ethically-driven, sustainable advancements that elevate health
        standards across the continent.
      </>
    ),
    btn: "More About us",
  };
  const {
    about_bg,
    about_img,
    popup_video,
    about_thumb,
    sub_title,
    title,
    des_1,
    dex_2,
    btn,
    booking_bg,
    b_sub_title,
    b_title,
    b_btn,
    b_img,
  } = about_content;

  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section
        className="about-area grey-bg pt-130 tp-box-space pb-130 ml-30 mr-30"
        style={{
          backgroundImage: `url(${about_bg})`,
        }}
      >
        <div className="about-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-12 col-12">
                <div
                  className="about-thumb text-lg-center p-relative ml-85 mb-60 wow fadeInLeft"
                  data-wow-delay=".3s"
                >
                  <img src={about_img} alt="about-thumb" />
                  <div className="about-video">
                    <button
                      onClick={() => setIsVideoOpen(true)}
                      className="popup-video"
                      href={popup_video}
                    >
                      <i className="fa-solid fa-play"></i>
                    </button>
                  </div>
                  <div className="about-thumb-shape d-none d-md-block">
                    <img src={about_thumb} alt="about-shape" />
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-12 col-12">
                <div
                  className="about-content ml-60 mb-60 wow fadeInRight"
                  data-wow-delay=".3s"
                >
                  <div className="tp-section">
                    <span className="tp-section__sub-title left-line mb-25">
                      {sub_title}
                    </span>
                    <h3 className="tp-section__title mb-45">{title}</h3>
                    <i>{des_1}</i>
                    <p className=" mr-20 mb-35">{dex_2}</p>
                  </div>
                  <div className="about-content__btn">
                    <Link href="/about" className="tp-btn-second">
                      {btn}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
   
      </section>

      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"d8w5SICzzxc"}
      />
      {/* video modal end */}
    </>
  );
};

export default About;
