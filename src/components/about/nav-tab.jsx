import React from "react";

// Updated progress_data
const progress_data = [
  {
    id: 1,
    icon: "fa-solid fa-search", // Font Awesome icon for Early Detection
    img: "/assets/img/shape/navtabs-01.png",
    title: "Early Detection/Screening",
    des: (
      <>
        Advanced diagnostics to identify health risks early and enhance treatment
        outcomes.
      </>
    ),
  },
  {
    id: 2,
    icon: "fa-solid fa-stethoscope", // Font Awesome icon for Diagnosis
    img: "/assets/img/shape/navtabs-01.png",
    title: "Diagnosis",
    des: (
      <>
        Accurate and reliable testing to provide clarity and confidence in your
        diagnosis.
      </>
    ),
  },
  {
    id: 3,
    icon: "fa-solid fa-pills", // Font Awesome icon for Therapy Selection
    img: "/assets/img/shape/navtabs-01.png",
    title: "Therapy Selection",
    des: (
      <>
        Personalized treatment plans tailored to individual patient needs.
      </>
    ),
  },
  {
    id: 4,
    icon: "fa-solid fa-chart-line", // Font Awesome icon for Therapy Monitoring
    img: "", // Removed last image
    title: "Therapy Monitoring",
    des: (
      <>
        Continuous monitoring to track therapy progress and optimize outcomes.
      </>
    ),
  },
];

// Updated tab_content
const tab_content = [
  {
    id: 1,
    tab_id: "profile-tab-pane",
    aria_labelledby: "profile-tab",
    header: (
      <>
        HomeHealth is dedicated to transforming lives through innovative
        healthcare solutions and cutting-edge research.
      </>
    ),
    title: "Our Vision and Mission",
    des_1: (
      <>
        <b>Vision:</b> To be the leading force in advancing healthcare innovation
        in Africa, driving breakthrough clinical research that transforms lives,
        elevates health standards, and empowers communities across the continent.
      </>
    ),
    des_2: (
      <>
        <b>Mission:</b> Our mission is to conduct high-quality, ethically-grounded
        clinical research that addresses Africa’s unique healthcare challenges. By
        collaborating with local experts and leveraging cutting-edge biotechnology,
        we provide affordable medical solutions to improve the well-being of African
        communities for generations.
      </>
    ),
    images: [
      { order: "order-lg-1", img: "/assets/img/tab/tab-thumb-03.jpg" },
      { order: "order-lg-3", img: "/assets/img/tab/tab-thumb-04.jpg" },
    ],
  },
  {
    id: 2,
    tab_id: "contact-tab-pane",
    aria_labelledby: "contact-tab",
    header: (
      <>
        Our values guide every aspect of our work, ensuring excellence and
        integrity in all we do.
      </>
    ),
    title: "Our Values",
    des_1: (
      <>
        <ul>
          <li>
            <b>Patient-Centric:</b> Prioritizing the needs of patients and their
            families in every aspect of our work.
          </li>
          <li>
            <b>Innovation:</b> Advancing precision diagnostics and improving
            patient outcomes through cutting-edge research.
          </li>
          <li>
            <b>Collaboration:</b> Promoting a diverse and inclusive culture that
            encourages open communication and mutual respect.
          </li>
          <li>
            <b>Excellence:</b> Committed to continuous improvement, ensuring
            accuracy, reliability, and high standards.
          </li>
        </ul>
      </>
    ),
    des_2: (
      <>
        Through these values, HomeHealth remains steadfast in its mission to
        empower African communities and improve lives through better healthcare
        solutions.
      </>
    ),
    images: [
      { order: "order-lg-1", img: "/assets/img/tab/tab-thumb-01.jpg" },
      { order: "order-lg-3", img: "/assets/img/tab/tab-thumb-02.jpg" },
    ],
  },
];

const NavTab = () => {
  return (
    <>
      <section className="nav-area tp-common-area pt-130 pb-80" id="vision-mission">
        <div className="container">
          <ul className="nav tp-nav-tavs mb-70" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home-tab-pane"
                type="button"
                role="tab"
                aria-controls="home-tab-pane"
                aria-selected="true"
              >
                Our Process
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile-tab-pane"
                type="button"
                role="tab"
                aria-controls="profile-tab-pane"
                aria-selected="false"
              >
                Our Vision & Mission
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#contact-tab-pane"
                type="button"
                role="tab"
                aria-controls="contact-tab-pane"
                aria-selected="false"
              >
                Our Values
              </button>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home-tab-pane"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <span className="nav-info d-flex justify-content-center text-center mb-75">
                Transforming lives through innovation and excellence in
                healthcare.
              </span>
              <div className="row">
                {progress_data.map((item) => (
                  <div key={item.id} className="col-xl-3 col-lg-3 col-md-6">
                    <div className="navtabs nav-primary p-relative text-center mb-40">
                      <div className="navtabs__icon mb-35">
                        <i className={item.icon}></i>
                      </div>
                      <div className="navtabs__content">
                        <h5 className="navtabs__title mb-25 mb-10">
                          {item.title}
                        </h5>
                        <p>{item.des}</p>
                      </div>
                      {item.img && (
                        <div className="navtabs__shape d-none d-lg-block">
                          <img src={item?.img} alt="shape" />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {tab_content.map((item) => (
              <div
                key={item.id}
                className="tab-pane fade"
                id={`${item.tab_id}`}
                role="tabpanel"
                aria-labelledby={`${item.aria_labelledby}`}
              >
                <span className="nav-info d-flex justify-content-center text-center mb-75">
                  {item.header}
                </span>
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-12 order-lg-2">
                    <div className="nabmission mb-30">
                      <div className="nabmission__content text-center ml-50 mr-50 pt-20">
                        <h4 className="nabmission__title mb-35">
                          {item.title}
                        </h4>
                        <p className="mb-35">{item.des_1}</p>
                        <p>{item.des_2}</p>
                      </div>
                    </div>
                  </div>

                  {item.images.map((img, i) => (
                    <div
                      key={i}
                      className={`col-xl-3 col-lg-3 col-md-6 ${img.order}`}
                    >
                      <div className="nabthumb mb-30">
                        <img src={img.img} alt="tab-thumb" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default NavTab;