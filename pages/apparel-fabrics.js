import React, { useState, useEffect } from "react";
import Navbar from "../components/_App/Navbar";
import PageBannerTitle from "../components/common/PageBannerTitle";
import Footer from "../components/_App/Footer";
import ApparelMain from "../components/Apparel/ApparelMain";
import { gallery, parseImageUrls, singleSlugData } from "../utils/function";
import ProductGallery from "../components/ProductGallery/ProductGallery";

const ApparelFabrics = () => {
  const [post, setPost] = useState(null);
  const [hospitalGallery, setHospitalGallery] = useState([]);

  console.log("post: ", post);

  useEffect(() => {
    slugData();
    // hospital_gallery();
  }, []);

  const slugData = async () => {
    try {
      const res = await singleSlugData("apparel-fabrics");
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

  // const hospital_gallery = async () => {
  //   try {
  //     const res = await gallery();
  //     const response = parseImageUrls(res);
  //     setHospitalGallery(response);
  //   } catch (error) {
  //     console.log("hospitalerror: ", error);
  //   }
  // };

  console.log("post", post);
  return (
    <>
      <Navbar />

      <PageBannerTitle
        pageTitle="Apparel Fabrics"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Apparel Fabrics"
        imgClass="/images/products/apparel/banner.jpg"
      />

      <ApparelMain data={post} />
      {/* <ProductGallery data={hospitalGallery} /> */}

      <Footer />
    </>
  );
};

export default ApparelFabrics;
