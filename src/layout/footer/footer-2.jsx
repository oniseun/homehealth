import Link from "next/link";
import React from "react";
import contact_data from "@/data/contact-data";

const FooterTwo = () => {
  const contact = contact_data[0]; // Access the first contact info
  return (
    <>
      <footer>
        <div className="footer-area pt-105">
          <div className="tp-footer-top pb-25">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div
                    className="tp-footer-widget footer-2-col-1 mb-40 wow fadeInUp"
                    data-wow-delay=".2s"
                  >
                    <div className="tp-footer-widget__content mb-95">
                      <i>FEEL FREE TO CONTACT US</i>
                      <h4 className="tp-footer-widget__contact mb-20">
                        <a href={`tel:${contact.phone}`}>{contact.phone}</a>
                      </h4>
                      <a href={`mailto:${contact.email}`}>{contact.email}</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div
                    className="tp-footer-widget footer-2-col-2 mb-40 wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    <span className="tp-footer-widget__title mb-15">
                      Useful Links
                    </span>
                    <div className="tp-footer-widget__links mb-35">
                      <ul>
                        <li>
                          <Link href="/">Home</Link>
                        </li>
                        <li>
                          <Link href="/contact">Contact us</Link>
                        </li>
                        <li>
                          <Link href="/about">About us</Link>
                        </li>
                        <li>
                          <Link href="/faq">Frequently asked questions</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div
                    className="tp-footer-widget footer-2-col-4 mb-40 wow fadeInUp"
                    data-wow-delay=".8s"
                  >
                    <span className="tp-footer-widget__title mb-15">
                      Contact Info
                    </span>
                    <div className="tp-footer-widget__links mb-120">
                      <ul>
                        <li>{contact.address}</li>
                        <li>
                          Office Hours: {contact.office_hours.weekdays.days} -{" "}
                          {contact.office_hours.weekdays.time}
                        </li>
                        <li>
                          Weekend Hours: {contact.office_hours.weekends.days} -{" "}
                          {contact.office_hours.weekends.time}
                        </li>
                      </ul>
                    </div>
                    {/* <div className="tp-footer-widget__social fw-social">
                      <a
                        href="https://www.linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-area-bottom fw-border">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-12 col-12">
                  <div className="footer-widget__copyright copyright-white">
                    <span>
                      &copy; {new Date().getFullYear()} <Link href="/">Home Health</Link>.{" "}
                      <i>All Rights Reserved.</i>
                    </span>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 col-12">
                  <div className="footer-widget__copyright-info info-direction">
                    <ul className="d-flex align-items-center">
                      <li>
                        <a href="/terms">Terms and conditions</a>
                      </li>
                      <li>
                        <a href="/privacy-policy">Privacy policy</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterTwo;