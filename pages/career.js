import React, {useState, useEffect} from "react";
import Navbar from "../components/_App/Navbar";
import PageBannerTitle from "../components/common/PageBannerTitle";
import ContactForm from "../components/Contact/ContactForm";
import Footer from "../components/_App/Footer";
import CareerMain from "../components/Careers/CareerMain";
import { singleSlugData } from "../utils/function";

const Career = () => {
  const [post, setPost] = useState(null);
    console.log("post: ", post);
  
    useEffect(() => {
      slugData();
    }, []);
  
    const slugData = async () => {
      try {
        const res = await singleSlugData("career");
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

    console.log("post",post)
  return (
    <>
      <Navbar />

      <PageBannerTitle
        pageTitle="Career"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Career"
        imgClass="/images/career/Banner.jpg"
      />

      <CareerMain data={post} />

      <Footer />
    </>
  );
};

export default Career;
