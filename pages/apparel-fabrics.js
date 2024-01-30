import React, {useState, useEffect} from "react";
import Navbar from "../components/_App/Navbar";
import PageBannerTitle from "../components/common/PageBannerTitle";
import Footer from "../components/_App/Footer";
import ApparelMain from "../components/Apparel/ApparelMain";
import { singleSlugData } from "../utils/function";

const ApparelFabrics = () => {
    const [post, setPost] = useState(null);
    console.log("post: ", post);
  
    useEffect(() => {
      slugData();
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

    console.log("post",post)
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

            <ApparelMain data={post}/>

            <Footer />
        </>
    );
};

export default ApparelFabrics;
