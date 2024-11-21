import Link from "next/link";
import React from "react";
import ContactUs from "../forms/contact-us";
import contact_data from "@/data/contact-data";

const ContactForm = () => {
  const { address, phone, email, office_hours, google_map_embed_link } = contact_data[0];

  return (
    <>
      <section className="contact-area pt-130 pb-115">
  
        <div className="container">
        <div className="row">
        <div className="col-lg-12 col-md-12 col-12 mb-60">
              <div className="contactform wow fadeInRight" data-wow-delay=".4s">

                <div className="row">
                  <div className="col-lg-12">
                    <div className="tpcontactmap">
                      <iframe
                        src={google_map_embed_link}
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-lg-4 col-md-5 col-12 wow fadeInLeft"
              data-wow-delay=".4s"
            >
              <div
                className="tpcontact mr-60 mb-60 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="tpcontact__item text-center">
                  <div className="tpcontact__icon mb-20">
                    <img src="/assets/img/icon/contact-01.svg" alt="Address" />
                  </div>
                  <div className="tpcontact__address">
                    <h4 className="tpcontact__title mb-15">Address</h4>
                    <span>
                      <Link href="/contact">{address}</Link>
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="tpcontact mr-60 mb-60 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="tpcontact__item text-center">
                  <div className="tpcontact__icon mb-20">
                    <img src="/assets/img/icon/contact-02.svg" alt="Phone" />
                  </div>
                  <div className="tpcontact__address">
                    <h4 className="tpcontact__title mb-15">Phone Number</h4>
                    <span>
                      <a href={`tel:${phone}`}>{phone}</a>
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="tpcontact mr-60 mb-60 wow fadeInUp"
                data-wow-delay=".6s"
              >
                <div className="tpcontact__item text-center">
                  <div className="tpcontact__icon mb-20">
                    <img src="/assets/img/icon/contact-03.svg" alt="Opening Hours" />
                  </div>
                  <div className="tpcontact__address">
                    <h4 className="tpcontact__title mb-15">Opening Hours</h4>
                    <span>
                      Weekdays: {office_hours.weekdays.time} (
                      {office_hours.weekdays.days})
                    </span>
                    <br />
                    <span>
                      Weekends: {office_hours.weekends.time} (
                      {office_hours.weekends.days})
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-7 col-12">
              <div className="wow fadeInRight" data-wow-delay=".4s">
                {/* <h4 className="contactform__title mb-35">Send us a Message :</h4> */}
                <ContactUs />

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;