import React, { useEffect, useState } from "react";
import Navbar from "../components/_App/Navbar";
import PageBannerTitle from "../components/common/PageBannerTitle";
import MainContent from "../components/about/MainContent";
import Footer from "../components/_App/Footer";
import Awards from "../components/about/Awards";
import Management from "../components/about/Management";
import Milestones from "../components/about/Milestones";
import { singleSlugData } from "../utils/function";
import AboutComponent from "../components/Gallery/galleryComponent";
import GalleryComponent from "../components/Gallery/galleryComponent";
import axios from "axios";

const AboutPage = () => {
  const [post, setPost] = useState(null);
  console.log("post: ", post);

  useEffect(() => {
    slugData();
  }, []);

  const slugData = async () => {
    try {
      const res = await singleSlugData("gallery");
      console.log("res: ", res);
      if (res && res.length > 0) {
        setPost(res[0]);
        // gallery(res[0].guid.rendered);
      } else {
        // Handle the case where the page with the given slug is not found
        console.error("Page not found");
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const parseImageUrls = () => {
    const datats = post?.content?.rendered;
    const regex = /<img.*?src=['"](.*?)['"].*?>/g;
    const matches = datats?.match(regex);
    let url;
    if (matches) {
      const urls = matches.map((match) => match.match(/src=['"](.*?)['"]/)[1]);
      url = urls;
    } else {
      url = [];
    }

    return url;
  };
  return (
    <>
      <Navbar />

      <PageBannerTitle
        pageTitle="Gallery"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Gallery"
        imgClass="/images/about/banner.jpg"
      />
      {/* <MainContent  /> */}

      <GalleryComponent data={parseImageUrls()} title={post} />

      {/* <Awards /> */}

      {/* <Management /> */}

      {/* <Milestones /> */}

      <Footer />
    </>
  );
};

export default AboutPage;