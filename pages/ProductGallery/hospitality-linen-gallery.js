import React, { useEffect, useState } from "react";
import Navbar from "../../components/_App/Navbar";
import PageBannerTitle from "../../components/common/PageBannerTitle";
import MainContent from "../../components/about/MainContent";
import Footer from "../../components/_App/Footer";
import Awards from "../../components/about/Awards";
import Management from "../../components/about/Management";
import Milestones from "../../components/about/Milestones";
import { singleSlugData } from "../../utils/function";
import AboutComponent from "../../components/Gallery/galleryComponent";
import GalleryComponent from "../../components/Gallery/galleryComponent";
import axios from "axios";
import { Gallery } from "react-grid-gallery";

import FsLightbox from "fslightbox-react";

const AboutPage = () => {
  const [post, setPost] = useState(null);
  const [image, setImage] = useState(null);
  const [bathTittle, setBathTittle] = useState(null);

  const [tableImage, setTableImage] = useState(null);
  const [tableTittle, setTableTittle] = useState(null);

  const [proImage, setProImage] = useState(null);
  const [proTittle, setProTittle] = useState(null);

  const [bedImage, setBedImage] = useState(null);
  const [bedTittle, setBedTittle] = useState(null);

  const [bathLightboxVisible, setBathLightboxVisible] = useState(false);
  const [bathLightboxIndex, setBathLightboxIndex] = useState(0);

  const [tableLightboxVisible, setTableLightboxVisible] = useState(false);
  const [tableLightboxIndex, setTableLightboxIndex] = useState(0);

  const [proLightboxVisible, setProLightboxVisible] = useState(false);
  const [proLightboxIndex, setProLightboxIndex] = useState(0);

  const [bedLightboxVisible, setBedLightboxVisible] = useState(false);
  const [bedLightboxIndex, setBedLightboxIndex] = useState(0);

  console.log("post: ", post);

  useEffect(() => {
    slugData();
    images("bath-linen");
    images("bed-linen");
    // images("pro-linen");
    images("table-linen");
  }, []);

  const slugData = async () => {
    try {
      const res = await singleSlugData("hospitality-linen-gallery");
      console.log("res: ", res);
      if (res && res.length > 0) {
        setPost(res[0]);
        // gallery(res[0].guid.rendered);
      } else {
        // Handle the case where the page with the given slug is not found
        console.error("Page not found");
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const images = async (type) => {
    try {
      let res;
      if (type === "bath-linen") {
        res = await singleSlugData("bath-linen");
      } else if (type === "bed-linen") {
        res = await singleSlugData("bed-linen");
      // } else if (type === "pro-linen") {
      //   res = await singleSlugData("promotional-linen");
      } else if (type === "table-linen") {
        res = await singleSlugData("table-linen");
      }
      console.log("res: ", res);
      if (res && res.length > 0) {
        if (type === "bath-linen") {
          ImageUrls(res[0], "bath");
          setBathTittle(res[0].title.rendered);
        } else if (type === "bed-linen") {
          ImageUrls(res[0], "bed");
          setBedTittle(res[0].title.rendered);
        // } else if (type === "pro-linen") {
        //   ImageUrls(res[0], "pro");
        //   setProTittle(res[0].title.rendered);
        } else if (type === "table-linen") {
          ImageUrls(res[0], "table");
          setTableTittle(res[0].title.rendered);
        }

        // ImageUrls(res[0], "bath");
        // gallery(res[0].guid.rendered);
      } else {
        // Handle the case where the page with the given slug is not found
        console.error("Page not found");
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const parseImageUrls = () => {
    const datats = post?.content?.rendered;
    const regex = /<img.*?src=['"](.*?)['"].*?>/g;
    const matches = datats?.match(regex);
    let url;
    if (matches) {
      const urls = matches.map((match) => match.match(/src=['"](.*?)['"]/)[1]);
      url = urls;
    } else {
      url = [];
    }

    return url;
  };

  const ImageUrls = (data, type) => {
    const datats = data?.content?.rendered;
    const regex = /<img.*?src=['"](.*?)['"].*?>/g;
    const matches = datats?.match(regex);
    let url;
    if (matches) {
      const urls = matches.map((match) => match.match(/src=['"](.*?)['"]/)[1]);
      url = urls;
    } else {
      url = [];
    }
    if (type == "bath") {
      setImage(url);
    } else if (type == "table") {
      setTableImage(url);
    } else if (type == "bed") {
      setBedImage(url);
    } else if (type == "pro") {
      setProImage(url);
    }
    console.log("✌️url --->", url);

    return url;
  };

  const openTableLightbox = (index) => {
    setTableLightboxIndex(index);
    setTableLightboxVisible(true);
  };

  const closeTableLightbox = () => {
    setTableLightboxVisible(false);
  };

  const openProLightbox = (index) => {
    setProLightboxIndex(index);
    setProLightboxVisible(true);
  };

  const closeProLightbox = () => {
    setProLightboxVisible(false);
  };

  const openBedLightbox = (index) => {
    setBedLightboxIndex(index);
    setBedLightboxVisible(true);
  };

  const closeBedLightbox = () => {
    setBedLightboxVisible(false);
  };

  const openBathLightbox = (index) => {
    setBathLightboxIndex(index);
    setBathLightboxVisible(true);
  };

  const closeBathLightbox = () => {
    setBathLightboxVisible(false);
  };

  return (
    <>
      <Navbar />

      <PageBannerTitle
        pageTitle="Gallery"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Hospitality Linen"
        imgClass="/images/products/hospitality/banner.jpg"
      />
      {/* <MainContent  /> */}
      <div dangerouslySetInnerHTML={{ __html: post?.content?.rendered }}></div>
      <div className="container-fluid bg-wwh">
        <h1>{bathTittle}</h1>
        {image?.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Image ${index}`}
            // onClick={() => openLightbox(index)}
            onClick={() => openBathLightbox(index)}
            style={{ cursor: "pointer", maxWidth: "23%", height: "23%" }}
          />
        ))}
      </div>
      <div className="container-fluid bg-wwh">
        <h1>{bedTittle}</h1>
        {bedImage?.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Image ${index}`}
            onClick={() => openBedLightbox(index)}
            style={{ cursor: "pointer", maxWidth: "23%", height: "23%" }}
          />
        ))}
      </div>
      <div className="container-fluid bg-wwh">
        <h1>{tableTittle}</h1>
        {tableImage?.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Image ${index}`}
            onClick={() => openTableLightbox(index)}
            style={{ cursor: "pointer", maxWidth: "23%", height: "23%" }}
          />
        ))}
      </div>
      {/* <div className="container-fluid bg-wwh" >
        <h1>{proTittle}</h1>
        {proImage?.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Image ${index}`}
            onClick={() => openProLightbox(index)}
            // onClick={() => {
            //   setIndex(index);
            //   setIsOpen(true);
            // }}
            style={{ cursor: "pointer", maxWidth: "23%", height: "23%" }}
          />
        ))}
      </div> */}

      {/* <GalleryComponent data={parseImageUrls()} title={post} /> */}

      {/* <Awards /> */}

      {/* <Management /> */}

      {/* <Milestones /> */}
      {/* {isOpen &&
      <LightBox
        data={tableImage}
        index={index}
        open={isOpen}
        close={() => setIsOpen(false)}
      />
    } */}
      <FsLightbox
        toggler={tableLightboxVisible}
        sources={tableImage}
        type="image"
        slide={tableLightboxIndex + 1}
        onClose={closeTableLightbox}
      />

      <FsLightbox
        toggler={bedLightboxVisible}
        sources={bedImage}
        type="image"
        slide={bedLightboxIndex + 1}
        onClose={closeBedLightbox}
      />

      <FsLightbox
        toggler={proLightboxVisible}
        sources={proImage}
        type="image"
        slide={proLightboxIndex + 1}
        onClose={closeProLightbox}
      />

      <FsLightbox
        toggler={bathLightboxVisible}
        sources={image}
        type="image"
        slide={bathLightboxIndex + 1}
        onClose={closeBathLightbox}
      />

      <Footer />
    </>
  );
};

export default AboutPage;
