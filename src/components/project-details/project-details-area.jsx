import React, { useState } from "react";
import { useRouter } from "next/router"; // To extract URL params
import technologies_data from "@/data/technologies-data"; // Replace this with your JSON file
import VideoPopup from "@/modals/video-popup";

const ProjectDetailsArea = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const router = useRouter();
  const { id } = router.query; // Extract 'id' from the URL
  
  // Fetch the relevant data based on the 'id'
  const projectData = technologies_data.find((item) => item.id === id) || {};

  const {
    main_title,
    overview,
    main_image,
    category,
    date,
    sections = [],
  } = projectData;

  return (
    <>
      <section className="project-area pt-125 pb-35">
        <div className="container">
          <div className="row mb-40">
            {/* Overview Section */}
            <div className="col-lg-6 col-md-6">
              <div
                className="tpoverview mb-60 wow fadeInLeft"
                data-wow-delay=".2s"
              >
                <h5 className="tpproject-title mb-50">Project Overview</h5>
                <p>
                  Title: <span>{main_title || "N/A"}</span>
                </p>
                <p>
                  Date: <span>{date || "N/A"}</span>
                </p>
                <p>
                  Category: <span>{category || "N/A"}</span>
                </p>
                <div className="tpoverview__social pt-30">
                  <a href="#">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a className="tpover-social-prn" href="#">
                    <i className="fa-brands fa-pinterest-p"></i>
                  </a>
                  <a className="tpover-social-tweet" href="#">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a className="tpover-social-tube" href="#">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Overview Content */}
            <div className="col-lg-6 col-md-6">
              <div
                className="tpviewtext mb-60 wow fadeInRight"
                data-wow-delay=".2s"
              >
                <p className="tpviewtext__para">{overview || "No overview available."}</p>
              </div>
            </div>
          </div>

          {/* Main Image Section */}
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div
                className="tpprothumb mb-120 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <img src={main_image || "/assets/img/gallery/default.jpg"} alt="project-thumb" />
              </div>
            </div>
          </div>

          {/* Sections */}
          {sections.map((section, index) => (
            <div className="row" key={index}>
              <div className="col-lg-6 col-md-6">
                <div
                  className="tpprosolution mb-40 wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <h5 className="tpproject-title mb-50">{section.title}</h5>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div
                  className="tpprosolution pb-40 wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <p>{section.text}</p>
                </div>
              </div>
              {section.img && (
                <div className="col-md-12">
                  <div
                    className="tpprovideo p-relative mb-115 wow fadeInUp"
                    data-wow-delay=".2s"
                  >
                    <img src={section.img} alt={`${section.title}-thumb`} />
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Video Section */}
          <div className="row">
            <div className="col-md-12">
              <div
                className="tpprovideo p-relative mb-115 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <img
                  src="/assets/img/gallery/project-02.jpg"
                  alt="project-thumb-video"
                />
                <button
                  onClick={() => setIsVideoOpen(true)}
                  className="play-btn popup-video"
                >
                  <i className="fas fa-play"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"d8w5SICzzxc"} // Replace with dynamic data if available
      />
    </>
  );
};

export default ProjectDetailsArea;