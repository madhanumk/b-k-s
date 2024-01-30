import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBannerTitle from "../components/common/PageBannerTitle";
import SingleServiceContent from "../components/services/SingleServiceContent";
import Footer from "../components/_App/Footer";

const SingleServices = () => {
  return (
    <>
      <Navbar />

      <PageBannerTitle
        pageTitle="Security & Surveillance"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Services Details"
        imgClass="/images/page-title-bg1.jpg"
      />

      <SingleServiceContent />

      <Footer />
    </>
  );
};

export default SingleServices;
