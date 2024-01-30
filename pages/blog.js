import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBannerTitle from "../components/common/PageBannerTitle";
import BlogPost from "../components/blog/BlogPost";
import Footer from "../components/_App/Footer";

const Blog = () => {
  return (
    <>
      <Navbar />

      <PageBannerTitle
        pageTitle="Blog"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blog"
        imgClass="/images/page-title-bg2.jpg"
      />
 
      <BlogPost />

      <Footer />
    </>
  );
};

export default Blog;
