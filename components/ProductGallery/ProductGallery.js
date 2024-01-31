import FsLightbox from "fslightbox-react";
import React, { useState } from "react";

export default function ProductGallery({ data }) {
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
    <div>
      <div>
        {data?.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Image ${index}`}
            onClick={() => openLightbox(index)}
            style={{ cursor: "pointer", maxWidth: "25%", height: "25%" }}
          />
        ))}
      </div>
      <FsLightbox
        toggler={lightboxVisible}
        sources={data}
        type="image"
        slide={lightboxIndex + 1}
        onClose={closeLightbox}
      />
    </div>
  );
}
