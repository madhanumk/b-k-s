import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBannerTitle from "../components/common/PageBannerTitle";
import ServicesCard from './../components/services/ServicesCard';
import Footer from "../components/_App/Footer";

const Services = () => {
  return (
    <>
      <Navbar />

      <PageBannerTitle
        pageTitle="Services"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Services"
        imgClass="/images/page-title-bg2.jpg"
      />

      <ServicesCard />

      <Footer />
    </>
  );
};

export default Services;
