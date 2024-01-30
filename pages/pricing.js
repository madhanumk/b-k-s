import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBannerTitle from "../components/common/PageBannerTitle";
import SubscribeForm from "../components/home/SubscribeForm";
import PricingTable from "../components/home/PricingTable";
import Footer from "../components/_App/Footer";

const Pricing = () => {
  return (
    <>
      <Navbar />

      <PageBannerTitle
        pageTitle="Partner"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Partner"
        imgClass="/images/page-title-bg2.jpg"
      />

      <PricingTable />

      <SubscribeForm />

      <Footer />
    </>
  );
};

export default Pricing;
