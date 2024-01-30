import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBannerTitle from "../components/common/PageBannerTitle";
import CheckoutForm from "../components/Checkout/CheckoutForm";
import Footer from "../components/_App/Footer";
 
const Checkout = () => {
  return (
    <>
      <Navbar />

      <PageBannerTitle
        pageTitle="Cart"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Cart"
        imgClass="/images/page-title-bg1.jpg"
      />
 
      <CheckoutForm />

      <Footer />
    </>
  );
};

export default Checkout;
