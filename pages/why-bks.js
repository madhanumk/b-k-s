import React, {useState, useEffect} from "react";
import Navbar from "../components/_App/Navbar";
import PageBannerTitle from "../components/common/PageBannerTitle";
import MainContent from "../components/about/MainContent";
import Services from "../components/home/Services";
import Webinar from "../components/home/Webinar";
import Partner from "../components/home/Partner";
import Feedback from "../components/home/Feedback";
import PricingTable from "../components/home/PricingTable";
import SubscribeForm from "../components/home/SubscribeForm";
import Footer from "../components/_App/Footer";
import Awards from "../components/about/Awards";
import Management from "../components/about/Management";
import Milestones from "../components/about/Milestones";
import OverView from "../components/why-bks/OverView";
import YarnQuality from "../components/why-bks/Yarn-quality";
import Erp from "../components/why-bks/Erp";
import RndD from "../components/why-bks/RndD";
import QualityPractice from "../components/why-bks/QualityPractice";
import Sustainability from "../components/why-bks/ShortSustainability";
import { singleSlugData } from "../utils/function";

const AboutPage = () => {
    const [post, setPost] = useState(null);
    console.log("post: ", post);
  
    useEffect(() => {
      slugData();
    }, []);
  
    const slugData = async () => {
      try {
        const res = await singleSlugData("why-bks");
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
                pageTitle="Why BKS Services"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Why BKS Services"
                imgClass="/images/Why-bks/Banner.jpg"
            />

            <OverView data={post}/>

            {/* <YarnQuality />

            <Erp />

            <RndD />

            <QualityPractice />

            <Sustainability /> */}

            <Footer />
        </>
    );
};

export default AboutPage;
