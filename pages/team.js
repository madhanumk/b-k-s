import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBannerTitle from "../components/common/PageBannerTitle";
import MainContent from "../components/team/MainContent";
import Footer from "../components/_App/Footer";

const Team = () => {
  return (
    <>
      <Navbar />

      <PageBannerTitle
        pageTitle="Team"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Team"
        imgClass="/images/page-title-bg2.jpg"
      />
 
      <MainContent />

      <Footer />
    </>
  );
};

export default Team;
