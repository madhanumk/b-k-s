import React,{useState, useEffect} from "react";
import Navbar from "../components/_App/Navbar";
import PageBannerTitle from "../components/common/PageBannerTitle";
import Footer from "../components/_App/Footer";
import Narrow from "../components/Processing/Narrow";
import Production from "../components/Processing/Production";
import WiderWidth from "../components/Processing/Wider-width";
import Production2 from "../components/Processing/Production2";
import FacilityEnables from "../components/Coating/Facility-enables";
import FacilityAllows from "../components/Coating/Facility-allows";
import { singleSlugData } from "../utils/function";

const Coating = () => {
    const [post, setPost] = useState(null);
    console.log("post: ", post);
  
    useEffect(() => {
      slugData();
    }, []);
  
    const slugData = async () => {
      try {
        const res = await singleSlugData("coating");
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
                pageTitle="Coating"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Coating"
                imgClass="/images/coating/banner.jpg"
            />

            <FacilityEnables data={post} />

            {/* <FacilityAllows /> */}

            {/* <WiderWidth />

            <Production2 /> */}

            <Footer />
        </>
    );
};

export default Coating;
