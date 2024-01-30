import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBannerTitle from "../components/common/PageBannerTitle";
import Footer from "../components/_App/Footer";
import NewsDetailsContent from "../components/News-Events/NewsDetailContent";

const NewsDetails = () => {
  return (
    <>
      <Navbar />

      <PageBannerTitle
        pageTitle="Here are the 5 most telling signs of micromanagement"
        homePageUrl="/"
        homePageText="Home"
        activePageText="News & Events Details"
        imgClass="/images/page-title-bg2.jpg"
      />

      <NewsDetailsContent />

      <Footer />
    </>
  );
};

export default NewsDetails;
