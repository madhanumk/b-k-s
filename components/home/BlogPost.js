import React from "react";
import Link from "next/link";

const BlogPost = () => {
  return (
    <>
      <div className="blog-area" style={{ padding: "50px 0px" }}>
        <div className="container">
          <div className="section-title">
            <h2>Infrastructure</h2>
            <p style={{ fontSize: "16px" }}>
              BKS Textiles is a vertically integrated facility that produces an eclectic range of textile
              products with remarkable quality at short-lead times. We offer innovative and top-of-the-
              line woven solutions with functional finishes and a wide range of prints.
            </p>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1200"
            >
              <div className="single-blog-post">
                <div className="entry-thumbnail" style={{ display: "flex", justifyContent: "center" }}>
                  <Link href="/infrastructure#infra-yarn">
                    <img src="/images/blog/1.png" alt="image" />
                  </Link>
                </div>

                <div className="entry-post-content" style={{ textAlign: "center" }}>
                  {/* <div className="entry-meta">
                    <ul>
                      <li>
                        <a href="#">Admin</a>
                      </li>
                      <li>August 15, 2020</li>
                    </ul>
                  </div> */}

                  <h3>
                    <Link href="/infrastructure#infra-yarn">
                      Yarn Dyeing
                    </Link>
                  </h3>
                  <p style={{ fontSize: "16px" }}>
                    Our modern yarn dyeing facility is powered by green energy and equipped with cutting-
                    edge Fong’s dyeing machine, offering a capacity range of 3 Kg to 750 Kg.
                  </p>

                  {/* <Link href="/blog-details" className="learn-more-btn">
                    Read Story <i className="flaticon-add"></i>
                  </Link> */}
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
            >
              <div className="single-blog-post">
                <div className="entry-thumbnail" style={{ display: "flex", justifyContent: "center" }}>
                  <Link href="/infrastructure#infra-weaving-prep">
                    <img src="/images/home/infrastructure-weaving-preparatory.png" alt="image" />
                  </Link>
                </div>

                <div className="entry-post-content" style={{ textAlign: "center" }}>
                  <h3>
                  <Link href="/infrastructure#infra-weaving-prep">
                      Weaving Preparatory
                    </Link>
                  </h3>
                  <p style={{ fontSize: "16px" }}>
                    Equipped with automatic warping machines and two multi-cylinder sizing machines we feed
                    warp to in-house weaving as well as for vendor operations.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1200"
            >
              <div className="single-blog-post" >
                <div className="entry-thumbnail" style={{ display: "flex", justifyContent: "center" }}>
                  <Link href="/infrastructure#infra-weaving">
                    <img src="/images/blog/3.png" alt="image" />
                  </Link>
                </div>

                <div className="entry-post-content" style={{ textAlign: "center" }}>

                  <h3>
                  <Link href="/infrastructure#infra-weaving">
                      Weaving
                    </Link>
                  </h3>
                  <p style={{ fontSize: "16px" }}>
                    Our Dobby shuttle-less ITEMA Rapier looms, each equipped with 20 shafts and 4 colours
                    can produce fabrics up to 345 cm wide.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1200"
            >
              <div className="single-blog-post" >
                <div className="entry-thumbnail" style={{ display: "flex", justifyContent: "center" }}>
                <Link href="/infrastructure#infra-processing">
                    <img src="/images/blog/4.png" alt="image" />
                  </Link>
                </div>

                <div className="entry-post-content" style={{ textAlign: "center" }}>
                  <h3>
                    <Link href="/infrastructure#infra-processing">
                    Processing
                    </Link>
                  </h3>
                  <p style={{ fontSize: "16px" }}>
                    Equipped with Continuous Bleaching Range (CBR), Continuous Dyeing Range (CDR), and
                    Rotary printing machines we ensure perfect fabric finishes.
                  </p>
                </div>
              </div>
            </div>
          </div>



          {/* row 2 */}

          <div className="row justify-content-center">
            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1200"
            >
              <div className="single-blog-post">
                <div className="entry-thumbnail" style={{ display: "flex", justifyContent: "center" }}>
                <Link href="/infrastructure#infra-printing">
                    <img src="/images/blog/5.png" alt="image" />
                  </Link>
                </div>

                <div className="entry-post-content" style={{ textAlign: "center" }}>
                  <h3>
                    <Link href="/infrastructure#infra-printing">
                      Printing
                    </Link>
                  </h3>
                  <p style={{ fontSize: "16px" }}>
                    We are well equipped to handle all kinds of printing, including reactive, pigment, and
                    disperse on various base fabrics like 100% cotton, polycotton, 100% polyester, viscose,
                    linen, etc.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
            >
              <div className="single-blog-post">
                <div className="entry-thumbnail" style={{ display: "flex", justifyContent: "center" }}>
                  <Link href="/infrastructure#infra-coating">
                    <img src="/images/home/infrastructure-coating.png" alt="image" />
                  </Link>
                </div>

                <div className="entry-post-content" style={{ textAlign: "center" }}>
                  <h3>
                    <Link href="/infrastructure#infra-coating">
                      Coating
                    </Link>
                  </h3>
                  <p style={{ fontSize: "16px" }}>
                    With a production capacity of an impressive 20,000 metres per day, we can handle woven
                    fabrics up to 70" (178 cm) wide.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1200"
            >
              <div className="single-blog-post" >
                <div className="entry-thumbnail" style={{ display: "flex", justifyContent: "center" }}>
                <Link href="/infrastructure#infra-sewing">
                    <img src="/images/blog/7.png" alt="image" />
                  </Link>
                </div>

                <div className="entry-post-content" style={{ textAlign: "center" }}>
                  <h3>
                    <Link href="/infrastructure#infra-sewing">
                      Sewing
                    </Link>
                  </h3>
                  <p style={{ fontSize: "16px" }}>
                    Our ultra-modern sewing machines of Juki and Brother make, comprise three-thread
                    overlock and single needle machines suitable for special operation machines.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* shape images */}
        <div className="shape-img2">
          <img src="/images/shape/1.png" alt="image" />
        </div>
        <div className="shape-img3">
          <img src="/images/shape/5.png" alt="image" />
        </div>
        <div className="shape-img7">
          <img src="/images/shape/3.png" alt="image" />
        </div>
        <div className="dot-shape1">
          <img src="/images/shape/4.png" alt="image" />
        </div>
        <div className="dot-shape6">
          <img src="/images/shape/4.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default BlogPost;
