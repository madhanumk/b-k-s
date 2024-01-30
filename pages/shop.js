import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBannerTitle from "../components/common/PageBannerTitle";
import ProductContent from "../components/shop/ProductContent";
import Footer from "../components/_App/Footer";

const Shop = () => {
  return (
    <>
      <Navbar />

      <PageBannerTitle
        pageTitle="Shop"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Shop"
        imgClass="/images/page-title-bg1.jpg"
      />
 
      <ProductContent />

      <Footer />
    </>
  );
};

export default Shop;
