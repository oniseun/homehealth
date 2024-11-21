import React from "react";
import { useRouter } from "next/router";
import technologies_data from "@/data/technologies-data";
import Link from "next/link";

const ProjectDetailsBanner = () => {
  const router = useRouter();
  const { id } = router.query; // Get the id from the URL

  // Fetch the relevant data based on the id
  const projectData = technologies_data.find((item) => item.id === id) || {};

  const { main_title = "Default Title", category = "Default Category" } = projectData;

  return (
    <>
      <section
        className="breadcrumb__area pt-100 pb-120 breadcrumb__overlay"
        style={{
          backgroundImage: `url(/assets/img/banner/breadcrumb-01.jpg)`, // Static background
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7 col-lg-12 col-md-12 col-12">
              <div className="tp-breadcrumb">
                <h2 className="tp-breadcrumb__title">{main_title}</h2>
              </div>
            </div>
            <div className="col-xl-5 col-lg-12 col-md-12 col-12">
              <div className="tp-breadcrumb__link text-xl-end">
                <span>
                  Home Health: <Link href="/#technology">{category}</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectDetailsBanner;