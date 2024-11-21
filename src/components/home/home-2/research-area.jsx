import research_data from "@/data/research-data";
import technologies_data from "@/data/technologies-data"; // Import the technologies data
import Link from "next/link";
import React from "react";

const ResearchArea = () => {
  return (
    <>
      <section className="research-area pt-130 pb-130">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12 col-12">
              <div className="tp-section">
                <h3 className="tp-section__title mb-50 text-black">Technologies</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {technologies_data.map((item) => (
              <div key={item.id} className="col-lg-6 col-md-6">
                <div
                  className={`research-item ${item.color || ""} mb-50 wow fadeInUp`}
                  data-wow-delay=".6s"
                >
                  <div className="research-item__thum fix mb-20">
                    <img src={item.main_image} alt={`${item.main_title}-thumb`} />
                  </div>
                  <div className="research-item__content">
                    <span>{item.category}</span>
                    <h4 className="research-item__title mb-20">
                      <Link href={`/technology/${item.id}`}>{item.main_title}</Link>
                    </h4>
                    <p>{item.overview}</p>
                    <Link href={`/technology/${item.id}`} className="research-item__btn">
                      Read More
                    </Link>
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

export default ResearchArea;