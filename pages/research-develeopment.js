import React,{useState, useEffect} from "react";
import Navbar from "../components/_App/Navbar";
import Footer from "../components/_App/Footer";
import PageBannerTitle from "../components/common/PageBannerTitle";
import { singleSlugData } from "../utils/function";

const ResearchDevelopment = () => {
    const [post, setPost] = useState(null);
    console.log("post: ", post);
  
    useEffect(() => {
      slugData();
    }, []);
  
    const slugData = async () => {
      try {
        const res = await singleSlugData("research-develeopment");
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
                pageTitle="Research & Developments"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Research & Developments"
                imgClass="/images/rd/banner.jpg"
            />

            <div className="container-fluid">
                <div
                    dangerouslySetInnerHTML={{ __html: post?.content?.rendered }}
                ></div>
            </div>

            <Footer />
        </>
    );
};

export default ResearchDevelopment;

