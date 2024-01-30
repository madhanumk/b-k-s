import React from "react";
import Link from "next/link";

const AboutContent = () => {
  return (
    <>
      <div className="about-area" style={{ padding: "50px 0px" }}>
        <div className="container">
          <div className="row align-items-center flex-column-reverse flex-lg-row">
            <div
              className="col-lg-6 col-md-12"
              // data-aos="fade-up"
              // data-aos-delay="100"
              // data-aos-duration="1200"
            >
              <div className="about-content">
                <h2>About Us</h2>
                <p style={{ fontSize: "16px" }}>
                  BKS Textiles is one of the leading textile solutions provider, with a vertically integrated production facility from yarn dyeing to finishing, producing a range of textile products from high-quality woven fabrics to beautiful hospitality linen products and stylish workwear . 
                </p>
                <p style={{ fontSize: "16px" }}>
                  We started with handloom and power-loom facilities and over the years we've expanded our facilities to include shuttleless weaving, dyeing, printing, finishing, and made-ups. Our product range has grown to match evolving fashion trends, making us a one-stop textile solutions provider.
                </p>
                <p style={{ fontSize: "16px" }}>At BKS Textiles we are constantly upgrading our facilities to improve economies, efficiency, and quality. Our modern plant in South India utilizes green energy and houses, cutting-edge weaving, processing and finishing machinery, integrating the latest technologies to ensure the best product outcomes. </p>
                <Link href="/about" className="btn btn-primary">
                  Read More
                </Link>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
            >
              {/* <div className="about-image"> */}
              {/* <img src="/images/about/1.jpg" alt="image" /> */}
              <img src="/images/home/about-us.png" alt="image" className="commonImage hospitality" style={{ width: "100%" }} />
              {/* </div> */}
            </div>
          </div>
        </div>

        {/* <div className="shape-img1">
          <img src="/images/shape/1.png" alt="image" />
        </div> */}
        {/* <div className="shape-img2">
          <img src="/images/shape/2.svg" alt="image" />
        </div> */}
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
        {/* <div className="dot-shape1">
          <img src="/images/shape/dot1.png" alt="image" />
        </div> */}
        <div className="dot-shape2">
          <img src="/images/shape/4.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default AboutContent;
