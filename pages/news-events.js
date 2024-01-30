import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBannerTitle from "../components/common/PageBannerTitle";
import BlogPost from "../components/News-Events/NewsEvents";
import Footer from "../components/_App/Footer";
import NewsEventsPost from "../components/News-Events/NewsEvents";

const NewsEvents = () => {
  return (
    <>
      <Navbar />

      <PageBannerTitle
        pageTitle="News Events"
        homePageUrl="/"
        homePageText="Home"
        activePageText="News Events"
        imgClass="/images/page-title-bg2.jpg"
      />
 
      <NewsEventsPost />

      <Footer />
    </>
  );
};

export default NewsEvents;
