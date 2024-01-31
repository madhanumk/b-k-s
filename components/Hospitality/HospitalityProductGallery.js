import React, { useEffect, useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";

const GalleryComponent = ({ data, title }) => {
  console.log("title", title?.title?.rendered);
  const htmlTitle = title?.title?.rendered;
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxVisible, setLightboxVisible] = useState(false);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxVisible(true);
  };

  const closeLightbox = () => {
    setLightboxVisible(false);
  };

  return (
    <>
      <div className="container-fluid p4">
        <h2> {htmlTitle} </h2>
        {data?.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Image ${index}`}
            onClick={() => openLightbox(index)}
            style={{ cursor: "pointer", maxWidth: "25%", height: "25%" }}
          />
        ))}

        <div className="shape-img2">
          <img src="/images/shape/1.png" alt="image" />
        </div>
        <div className="shape-img3">
          <img src="/images/shape/3.png" alt="image" />
        </div>
        <div className="shape-img4">
          <img src="/images/shape/4.png" alt="image" />
        </div>
        <div className="shape-img5">
          <img src="/images/shape/5.png" alt="image" />
        </div>
        <div className="shape-img6">
          <img src="/images/shape/6.png" alt="image" />
        </div>
        <div className="dot-shape1">
          <img src="/images/shape/4.png" alt="image" />
        </div>
      </div>

      <FsLightbox
        toggler={lightboxVisible}
        sources={data}
        type="image"
        slide={lightboxIndex + 1}
        onClose={closeLightbox}
      />
    </>
  );
};

export default GalleryComponent;
