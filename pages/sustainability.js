import React,{useState, useEffect} from "react";
import Navbar from "../components/_App/Navbar";
import PageBannerTitle from "../components/common/PageBannerTitle";
import Footer from "../components/_App/Footer";
import SustainabilityMain from "../components/Sustainability/SustainabilityMain";
import ZeroLiquid from "../components/Sustainability/Zero-Liquid";
import WasteManagement from "../components/Sustainability/Waste-management";
import GreenEnergy from "../components/Sustainability/Green-Energy";
import AfforestationDrive from "../components/Sustainability/Afforestation-drive";
import { singleSlugData } from "../utils/function";

const Sustainability = () => {
    const [post, setPost] = useState(null);
    console.log("post: ", post);
  
    useEffect(() => {
      slugData();
    }, []);
  
    const slugData = async () => {
      try {
        const res = await singleSlugData("sustainability");
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
                pageTitle="Sustainability"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Sustainability"
                imgClass="/images/sustainability/banner.jpg"
            />

            <SustainabilityMain data={post} />
{/* 
            <ZeroLiquid />

            <WasteManagement />

            <GreenEnergy />

            <AfforestationDrive /> */}

            <Footer />
        </>
    );
};

export default Sustainability;
