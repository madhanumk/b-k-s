import React, {useState, useEffect} from "react";
import Navbar from "../components/_App/Navbar";
import PageBannerTitle from "../components/common/PageBannerTitle";
import Footer from "../components/_App/Footer";
import Narrow from "../components/Processing/Narrow";
import Production from "../components/Processing/Production";
import WiderWidth from "../components/Processing/Wider-width";
import Production2 from "../components/Processing/Production2";
import { singleSlugData } from "../utils/function";

const Processing = () => {
    const [post, setPost] = useState(null);
    console.log("post: ", post);
  
    useEffect(() => {
      slugData();
    }, []);
  
    const slugData = async () => {
      try {
        const res = await singleSlugData("processing");
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
                pageTitle="Processing"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Processing"
                imgClass="/images/processing/banner.jpg"
            />

            <Narrow data={post} />

            {/* <Production /> */}

            <Footer />
        </>
    );
};

export default Processing;
