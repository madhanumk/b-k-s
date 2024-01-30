import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBannerTitle from "../components/common/PageBannerTitle";
import RelatedProducts from "../components/single-product/RelatedProducts";
import MainContent from "../components/single-product/MainContent";
import Footer from "../components/_App/Footer";

const ProductDetails = () => {
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

      <div className="product-details-area ptb-110">
        {/* MainContent */}
        <MainContent />

        {/* RelatedProducts */}
        <RelatedProducts />
      </div>

      <Footer />
    </>
  );
};

export default ProductDetails;
