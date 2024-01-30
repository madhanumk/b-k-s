import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBannerTitle from "../components/common/PageBannerTitle";
import Footer from "../components/_App/Footer";

const Partner = () => {
  return (
    <>
      <Navbar />

      <PageBannerTitle
        pageTitle="Partner"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Partner"
        imgClass="/images/page-title-bg1.jpg"
      />

      <div className="partner-area ptb-110 bg-f2f6f9">
        <div className="container">
          <div className="section-title">
            <h2>Featured Customers & Partners</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="customers-partner-list">
            <div className="partner-item">
              <a href="#" target="_blank">
                <img src="/images/partner/1.png" alt="image" />
              </a>
            </div>

            <div className="partner-item">
              <a href="#" target="_blank">
                <img src="/images/partner/2.png" alt="image" />
              </a>
            </div>

            <div className="partner-item">
              <a href="#" target="_blank">
                <img src="/images/partner/3.png" alt="image" />
              </a>
            </div>

            <div className="partner-item">
              <a href="#" target="_blank">
                <img src="/images/partner/1.png" alt="image" />
              </a>
            </div>

            <div className="partner-item">
              <a href="#" target="_blank">
                <img src="/images/partner/2.png" alt="image" />
              </a>
            </div>

            <div className="partner-item">
              <a href="#" target="_blank">
                <img src="/images/partner/3.png" alt="image" />
              </a>
            </div>

            <div className="partner-item">
              <a href="#" target="_blank">
                <img src="/images/partner/1.png" alt="image" />
              </a>
            </div>

            <div className="partner-item">
              <a href="#" target="_blank">
                <img src="/images/partner/2.png" alt="image" />
              </a>
            </div>

            <div className="partner-item">
              <a href="#" target="_blank">
                <img src="/images/partner/3.png" alt="image" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Partner;
