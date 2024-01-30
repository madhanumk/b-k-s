import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";

const Webinar = () => {
  // To open the lightbox change the value of the "toggler" prop.
  const [toggler, setToggler] = useState(false);

  return (
    <>
      {/* <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      /> */}

      <div className="webinar-area" style={{ backgroundImage: `url('/images/csr-bg.jpg')`, backgroundSize: "cover" }}>
        <div className="row m-0">
          <div className="col-lg-6 p-0" style={{ display: "flex" }}>
            {/* <div className="webinar-video-image">
              <img src="/images/planet.jpg" alt="image" />
              <div className="video-btn" onClick={() => setToggler(!toggler)}>
                <i className="flaticon-play-button"></i>
              </div>
            </div> */}
            <img src="/images/planet.jpg" alt="images" />
          </div>

          <div className="col-lg-6 " style={{ display: "flex", alignContent: "center", justifyContent:"center" }}>
            <div className="webinar-content Responsibility" >
              <h2>Corporate Social <br />Responsibility</h2>
              <p style={{ fontSize: "16px" }}>
                At BKS Textiles, we are committed to building robust communities; a thriving economy and
                a greener environment have been at the forefront of everything we do. We firmly believe in
                empowering our people to utilize their skills and knowledge and support the growth of local
                communities.
              </p>

              <Link href="csr" className="btn btn-primary">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Webinar;
