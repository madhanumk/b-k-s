
import FsLightbox from "fslightbox-react";
import React, { useState } from "react";

const HospitalityMain = ({ data }) => {
 
  return (
    <>
      <div className="container-fluid">
        <div
          dangerouslySetInnerHTML={{ __html: data?.content?.rendered }}
        ></div>
      </div>
      
    </>
  );
};

export default HospitalityMain;