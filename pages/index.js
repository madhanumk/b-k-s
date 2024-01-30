import React from "react";
import Navbar from "../components/_App/Navbar";
import Banner from "../components/home/Banner";
import Featured from "../components/home/Featured";
import AboutContent from "../components/home/AboutContent";
import Services from "../components/home/Services";
import Webinar from "../components/home/Webinar";
import Partner from "../components/home/Partner";
import Feedback from "../components/home/Feedback";
import PricingTable from "../components/home/PricingTable";
import BlogPost from "../components/home/BlogPost";
import SubscribeForm from "../components/home/SubscribeForm";
import Footer from "../components/_App/Footer";

const IndexPage = () => {
  return (
    <>
      <Navbar />

      <Banner />

      <AboutContent />

      <Services />

      <BlogPost />

      <Webinar />

      <Partner />

      <Footer />
    </>
  );
};

export default IndexPage;
