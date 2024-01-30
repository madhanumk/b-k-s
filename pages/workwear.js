import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBannerTitle from "../components/common/PageBannerTitle";
import Footer from "../components/_App/Footer";
import WorkwearMain from "../components/Workwear/WorkwearMain";
import WorkwearTable from "../components/Workwear/WorkwearTable";

const Workwear = () => {
    return (
        <>
            <Navbar />

            <PageBannerTitle
                pageTitle="Workwear"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Workwear"
                imgClass="/images/products/workwear/banner.jpg"
            />

            <WorkwearMain />

            <WorkwearTable />

            <Footer />
        </>
    );
};

export default Workwear;
