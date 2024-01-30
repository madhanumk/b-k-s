import React, { useEffect, useState } from "react";
import Navbar from "../components/_App/Navbar";
import PageBannerTitle from "../components/common/PageBannerTitle";
import MainContent from "../components/about/MainContent";
import Footer from "../components/_App/Footer";
import Awards from "../components/about/Awards";
import Management from "../components/about/Management";
import Milestones from "../components/about/Milestones";
import { singleSlugData } from "../utils/function";
import AboutComponent from "../components/about/aboutComponent";

const AboutPage = () => {
  const [post, setPost] = useState(null);
  console.log("post: ", post);

  useEffect(() => {
    slugData();
  }, []);

  const slugData = async () => {
    try {
      const res = await singleSlugData("about-us");
      if (res && res.length > 0) {
        setPost(res[0]);
      } else {
        // Handle the case where the page with the given slug is not found
        console.error("Page not found");
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };
  return (
    <>
      <Navbar />

      <PageBannerTitle
        pageTitle="About"
        homePageUrl="/"
        homePageText="Home"
        activePageText="About"
        imgClass="/images/about/banner.jpg"
      />
      {/* <MainContent  /> */}
      
      <AboutComponent data={post} />

      {/* <Awards /> */}

      {/* <Management /> */}

      {/* <Milestones /> */}

      <Footer />
    </>
  );
};

export default AboutPage;
