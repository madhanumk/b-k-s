import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <div className="services-area bg-f2f6f9" style={{ backgroundColor: "#fff4e7", padding: "50px 0px" }}>
        <div className="container">
          <div className="section-title">
            <h2>Products</h2>
            <p style={{ fontSize: "16px" }}>
              BKS Textiles houses modern manufacturing equipment integrating advanced textile
              technologies and a full-fledged testing laboratory to deliver an eclectic range of innovative
              products and contemporary designs.
            </p>
          </div>

          <div className="row">
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1200"
            >
              <div className="single-services-box" style={{ padding: "0px" }}>
                {/* <div className="icon"> */}
                {/* <i className="flaticon-income"></i> */}
                <div >
                  <img src="/images/home/product-hospitality.jpg" alt="product_1" />
                </div>
                {/* </div> */}
                <div style={{ padding: "20px", textAlign: "center" }}>
                  <h3>                    <Link href="/hospitality-fabrics/">Hospitality Linen</Link>
                  </h3>
                  <p style={{ fontSize: "16px" }}>
                    We supply an eclectic range of superior-quality linen to the finest of hotels and institutions
                    worldwide.
                  </p>
                </div>

              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
            >
              <div className="single-services-box" >
                <div >
                  <img src="/images/product/product-2.jpg" alt="product_1" />
                </div>
                <div style={{ padding: "20px", textAlign: "center" }}>
                  <h3>
                    <Link href="/apparel-fabrics/">Apparel Fabrics</Link>
                  </h3>
                  <p style={{ fontSize: "16px" }}>
                    We produce superior-quality fabrics perfect for producing garments, industrial wear, made-
                    ups, home textiles, and institutional textiles.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1200"
            >
              <div className="single-services-box">
                <div >
                  <img src="/images/product/product-3.jpg" alt="product_1" />
                </div>
                <div style={{ padding: "20px", textAlign: "center" }}>
                  <h3>
                    <Link href="/workwear/">Workwear</Link>
                  </h3>
                  <p style={{ fontSize: "16px" }}>
                    We produce a wide range of functional and stylish workwear of high quality that
                    guarantees durability and comfort.
                  </p>
                </div>
              </div>
            </div>

            {/* <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1200"
            >
              <div className="single-services-box">
                <div className="icon">
                  <i className="flaticon-molecular"></i>
                </div>

                <h3>
                  <Link href="/single-services">
                    Healthcare & Manufacturing
                  </Link>
                </h3>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>
            </div> */}

            {/* <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="1200"
            >
              <div className="single-services-box">
                <div className="icon">
                  <i className="flaticon-gear"></i>
                </div>

                <h3>
                  <Link href="/single-services">Software Engineers</Link>
                </h3>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>
            </div> */}

            {/* <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="1200"
            >
              <div className="single-services-box">
                <div className="icon">
                  <i className="flaticon-ceo"></i>
                </div>

                <h3>
                  <Link href="/single-services">IT Professionals</Link>
                </h3>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>
            </div> */}
          </div>
        </div>

        {/* Shape images */}
        <div className="shape-img2">
          <img src="/images/shape/3.png" alt="image" />
        </div>
        <div className="shape-img3">
          <img src="/images/shape/3.png" alt="image" />
        </div>
        {/* <div className="shape-img4">
          <img src="/images/shape/4.svg" alt="image" />
        </div> */}
        <div className="shape-img5">
          <img src="/images/shape/6.png" alt="image" />
        </div>
        <div className="shape-img7">
          <img src="/images/shape/3.png" alt="image" />
        </div>
        <div className="dot-shape1">
          <img src="/images/shape/4.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/5.png" alt="image" />
        </div>
        <div className="dot-shape4">
          <img src="/images/shape/dot4.png" alt="image" />
        </div>
        <div className="dot-shape5">
          <img src="/images/shape/dot5.png" alt="image" />
        </div>
        <div className="dot-shape6">
          <img src="/images/shape/4.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default Services;
