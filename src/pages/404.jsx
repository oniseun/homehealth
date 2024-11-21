import Link from "next/link";
import SEO from "@/components/seo";
import React from "react";
import Wrapper from "@/layout/wrapper";
import LayoutTwo from "@/layout/layout-2";

const Error = () => {
  return (
    <>
      <Wrapper>
        <SEO pageTitle="Page Not Found" />
        <LayoutTwo>
          <div className="container text-center">
            <div className="error_page">
              <Link href="/">
                <img
                  style={{ width: "100%" }}
                  src="/assets/img/404.webp"
                  alt="404 Error"
                />
              </Link>
              <div style={{ marginTop: "20px" }}>
                <Link href="/" legacyBehavior>
                  <a
                    className="btn btn-primary btn-lg"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      padding: "15px 30px",
                      fontSize: "18px",
                      textDecoration: "none",
                      color: "#fff",
                    }}
                  >
                    <i
                      className="fa fa-home"
                      style={{ marginRight: "10px", fontSize: "20px" }}
                    ></i>
                    Return to Home
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </LayoutTwo>
      </Wrapper>
    </>
  );
};

export default Error;