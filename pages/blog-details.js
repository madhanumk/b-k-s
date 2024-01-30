import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBannerTitle from "../components/common/PageBannerTitle";
import BlogDetailsContent from "../components/blog/BlogDetailsContent";
import Footer from "../components/_App/Footer";

const BlogDetails = () => {
  return (
    <>
      <Navbar />

      <PageBannerTitle
        pageTitle="Here are the 5 most telling signs of micromanagement"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blog Details"
        imgClass="/images/page-title-bg2.jpg"
      />

      <BlogDetailsContent />

      <Footer />
    </>
  );
};

export default BlogDetails;
