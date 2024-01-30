import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBannerTitle from "../components/common/PageBannerTitle";
import CartContent from "../components/cart/CartContent";
import Footer from "../components/_App/Footer";

const Cart = () => {
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

      <CartContent />

      <Footer />
    </>
  );
};

export default Cart;
