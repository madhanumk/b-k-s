import React, {useState, useEffect} from "react";
import Navbar from "../components/_App/Navbar";
import PageBannerTitle from "../components/common/PageBannerTitle";
import Footer from "../components/_App/Footer";
import Hospitality from "../components/Products/Hospitality";
import Apparel from "../components/Products/Apparel";
import Workwear from "../components/Products/Workwear";
import { singleSlugData } from "../utils/function";

const Infrastructure = () => {
    const [post, setPost] = useState(null);
    console.log("post: ", post);
  
    useEffect(() => {
      slugData();
    }, []);
  
    const slugData = async () => {
      try {
        const res = await singleSlugData("products");
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
                pageTitle="Products"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Products"
                imgClass="/images/products/Banner.jpg"
            />

            <Hospitality data={post} />

            {/* <Apparel />

            <Workwear /> */}

            <Footer />
        </>
    );
};

export default Infrastructure;
