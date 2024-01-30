import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
const MainContent = () => {

  const [toggler, setToggler] = useState(false);
  return (
    <>
     <FsLightbox
        toggler={toggler}
        sources={["/images/bks-video.mp4"]}
      />

      <div className="about-area" style={{ padding: "50px 0px" }}>
        <div className="container">
          <div className="row align-items-center  flex-column-reverse flex-lg-row">
            <div className="col-lg-6 col-md-12 sustainability" >
              <div className="about-content p-0">
                <h2>About Us</h2>
                <p style={{ fontSize: "16px", fontWeight: "bold" }}>
                  Propelled by sustainable textile innovation, we are one-stop solution for a premium
                  range of exclusive and creative textile solutions
                </p>
                <p style={{ fontSize: "16px" }}>
                Since its inception in 1983, BKS Textiles has come a long way from producing fabrics to a vertically integrated facility from yarn dyeing and weaving to finishing, we pride ourselves on offering a wide range of premium quality products to our customers. 

                Our range of workwear apparel is perfect for corporate uniforms and industrial wears, while our Hospitality Linen provide a touch of elegance to the hospitality sector.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              
            <div className="webinar-video-image">
              <img src="/images/about/aboutUs.jpg" alt="image" />

              <div className="video-btn" onClick={() => setToggler(!toggler)}>
                <i className="flaticon-play-button"></i>
              </div>
            </div>
               
            </div>
          </div>

          <div  className="row align-items-center" style={{paddingTop:"20px"}}>
             <div className="col-12">
              <div className="about-text">
                <p style={{ fontSize: "16px" }}>
                Besides producing the finest quality textile products, we are committed to preserving our planet. We ensure environmental sustainability by utilizing 100% green energy and have an advanced ETP plant that guarantees zero effluent discharge. 
                </p>
                <p style={{ fontSize: "16px" }}>We work with leading international and domestic brands, as part of R &amp; D, to develop a
                  range of fabrics that are in line with emerging fashion trends. We endure excellent
                  relationships with an extensive business network across domestic and the international
                  markets. We have a loyal clientele with a strong presence across USA, Europe, UAE and the
                  Middle East.</p>
                <p style={{ fontSize: "16px" }}>
                  BKS Textiles offers exceptional services with a team of highly skilled and motivated textile
                  professionals. We emphasize customer delight and deliver the best textile products on-time
                  at competitive prices.
                </p>
              </div>
            </div>
          </div>

          <div className="about-inner-area">
            <div className="row justify-content-center">
              {/* <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>Our History</h3>
                  <p>
                    Lorem ipsum dolor sit amet, con se ctetur adipiscing elit.
                    In sagittis eg esta ante, sed viverra nunc tinci dunt nec
                    elei fend et tiram.
                  </p>
                </div>
              </div> */}

              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="about-text hospitality " style={{margin:"0px"}}>
                  <h3>Our Vision</h3>
                  <p style={{ fontSize: "16px" }}>
                    We commit to delivering safe, creative and best-in-class textile products that meet the
                    needs of high-end market segments. We strive to empower and enrich our employees,
                    create a knowledge-sharing and collaborative environment, support sustainable and
                    environment-friendly practices in our supply chain, maintain high levels of integrity and
                    enhance customer delight.
                  </p>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>Our Mission</h3>
                  <p style={{ fontSize: "16px" }}>
                    To become the preferred partner for textile products in the domestic and international
                    market segments by delivering value, quality and exceptional services that provide our
                    customers with a competitive edge.
                  </p>
                  <p  style={{ fontSize: "16px" }}>
                    We empower our team to take ownership of their work and encourage them to work
                    collaboratively in a supportive and inclusive environment. We aim to achieve sustainable
                    growth, while promoting social and environmental responsibility.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        {/* <div className="shape-img1">
          <img src="/images/shape/1.png" alt="image" />
        </div> */}
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
        {/* <div className="dot-shape2">
          <img src="/images/shape/dot3.png" alt="image" />
        </div> */}
      </div>
    </>
  );
};

export default MainContent;
