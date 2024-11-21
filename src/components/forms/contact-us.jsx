import React from "react";

const ContactUs = () => {
  return (
    <>
      <div>
        {/* <form onSubmit={e => e.preventDefault()} id="contact-form" method="post">
          <div className="row">
            <div className="col-lg-6">
              <div className="contactform__input mb-30">
                <input name="name" type="text" placeholder="Enter your Name" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contactform__input mb-30">
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your mail"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contactform__input mb-30">
                <input
                  name="number"
                  type="text"
                  placeholder="Enter your number"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contactform__input mb-30">
                <input
                  name="website"
                  type="text"
                  placeholder="Enter your website"
                />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="contactform__input mb-30">
                <textarea
                  name="message"
                  placeholder="Type your comment"
                ></textarea>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="contactform__input mb-30-btn">
                <button type="submit" className="tp-btn">
                  Send Massage
                </button>
              </div>
              <p className="ajax-response"></p>
            </div>
          </div>
        </form> */}
        <iframe style={{ overflowY: 'hidden', margin: '0'}}  src="https://docs.google.com/forms/d/e/1FAIpQLSfuRnTtCJYdeauzWl4-vTNDhvcYB9aU58LwBaUWP59i__HNzQ/viewform?embedded=true" 
        width="100%" height="1100" frameborder="0" marginHeight="0" marginWidth="0">Loading…</iframe>

      </div>
    </>
  );
};

export default ContactUs;
