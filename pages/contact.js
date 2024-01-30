import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBannerTitle from "../components/common/PageBannerTitle";
import ContactForm from "../components/Contact/ContactForm";
import Footer from "../components/_App/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />

      <PageBannerTitle
        pageTitle="Contact"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Contact"
        imgClass="/images/contact/Banner.jpg"
      />

      <div className="contact-area ptb-110">
        <div className="container">
          <div className="section-title">
            {/* <span>Contact Us</span> */}
            <h2>Get in Touch With us</h2>
            <p>
              Durable and robust woven fabrics, hospitality linen and workwear
              apparel!
            </p>
          </div>

          <div className="contact-form">
            <div className="row align-items-center">
              <div className="col-lg-4 col-md-4">
                <div className="contact-image">
                  <img src="/images/contact.png" alt="image" />
                </div>
              </div>

              <div className="col-lg-8 col-md-8">
                <div>
                  <iframe
                    src="https://file.bkstextiles.in/contact-form/"
                    width="100%"
                    height="800"
                    allowfullscreen=""
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade" overflow="hidden" 
                    scroll="no-scroll" style={{overflow:"hidden", padding:"0px"}}
                  ></iframe>
                </div>
                {/* <ContactForm /> */}
              </div>
            </div>
          </div>

          <div className="contact-info">
            <div className="contact-info-content">
              <h3>Contact us by Phone Number or Email Address</h3>
              <h2>
                <a href="tel:04255 256789 to 799">04255 256789 to 799</a>
                <span>OR</span>
                <a href="mailto:enquiries@bkstextiles.in">
                  enquiries@bkstextiles.in
                </a>
              </h2>

              <ul className="social">
                <li>
                  <a href="https://www.twitter.com/" target="_blank">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/" target="_blank">
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/" target="_blank">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/" target="_blank">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/" target="_blank">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.1163940914894!2d77.3059164!3d11.0298932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9a99e3f0d7d0f%3A0x367d05fe9867f197!2sBKS%20Textiles%20Private%20Limited!5e0!3m2!1sen!2sin!4v1704374339034!5m2!1sen!2sin"
          width="100%"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
