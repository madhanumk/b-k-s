import React, {useEffect, useState} from "react";
import Navbar from "../components/_App/Navbar";
import PageBannerTitle from "../components/common/PageBannerTitle";
import Footer from "../components/_App/Footer";
import Narrow from "../components/Processing/Narrow";
import Production from "../components/Processing/Production";
import WiderWidth from "../components/Processing/Wider-width";
import Production2 from "../components/Processing/Production2";
import CertificationMain from "../components/Certification/CertificationMain";
import ProcessCertification from "../components/Certification/ProcessCertification";
import ProductCertification from "../components/Certification/ProductCertificate";
import CsrMain from "../components/CSR/CsrMain";
import { singleSlugData } from "../utils/function";

const Processing = () => {
    const [post, setPost] = useState(null);
    console.log("post: ", post);
  
    useEffect(() => {
      slugData();
    }, []);
  
    const slugData = async () => {
      try {
        const res = await singleSlugData("csr");
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
                pageTitle="Corporate Social Responsibility"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Corporate Social Responsibility"
                imgClass="/images/csr/Banner.jpg"
            />

            <CsrMain data={post}/>

            <Footer />
        </>
    );
};

export default Processing;
