import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-3 col-md-6 col-sm-6"
              data-aos="fade-in"
              data-aos-delay="100"
              data-aos-duration="1200"
            >
              <div className="single-footer-widget">
                <div className="logo">
                  <Link href="/">
                    <img src="/images/BKS-logo.png" alt="image" style={{ width: "70%" }} />
                  </Link>
                  <p>
                  BKS Textiles has a modern plant in Tirupur that utilizes green energy and houses cutting-edge weaving, processing and finishing machinery, integrating the latest technologies to ensure the best product outcomes. 
                  </p>
                </div>

                <ul className="social">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="flaticon-facebook-letter-logo"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com/" target="_blank">
                      <i className="flaticon-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="flaticon-instagram-logo"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/" target="_blank">
                      <i className="flaticon-youtube-play-button"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 col-sm-6"
              data-aos="fade-in"
              data-aos-delay="200"
              data-aos-duration="1200"
            >
              <div className="single-footer-widget">
                <h3>Information & Resources</h3>

                <ul className="footer-services-list">
                  <li>
                    <Link href="/csr/">CSR</Link>
                  </li>
                  <li>
                    <Link href="/sustainability/">Sustainability</Link>
                  </li>
                {/*  <li>
                    <Link href="/news-events/" >News & Events</Link>
  </li>*/}
                  <li>
                    <Link href="/gallery/" >Gallery</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 col-sm-6"
              data-aos="fade-in"
              data-aos-delay="300"
              data-aos-duration="1200"
            >
              <div className="single-footer-widget">
                <h3>Quick Links</h3>

                <ul className="quick-links-list">
                  <li>
                    <Link href="/about" >About Us</Link>
                  </li>
                 {/* <li>
                    <Link href="/blog">Blog</Link>
  </li>*/}
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link href="/contact">Support</Link>
                  </li>
                  <li>
                    <Link href="/contact">Applications</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 col-sm-6"
              data-aos="fade-in"
              data-aos-delay="400"
              data-aos-duration="1200"
            >
              <div className="single-footer-widget">
                <h3>Contacts</h3>

                <ul className="footer-contact-list">
                  <li>
                    <span>Address:</span> No. 2/316 Kungumapalayam Pirivu,
                    Naranapuram Post,<br />
                    Palladam-Tirupur Main Road,<br/>
                    Palladam - 641664<br />
                    Tamilnadu, India.
                  </li>
                  <li>
                    <span>Email:</span>{" "}
                    <a href="mailto:mail@bkstextiles.in">mail@bkstextiles.in</a>
                  </li>
                  <li>
                    <span>Phone:</span>{" "}
                    <a href="tel:04255256789" >04255 256789 to 799</a>
                  </li>
                 
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-area" style={{ backgroundColor: "#76c049" }}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <p>Copyright {currentYear} @ BKS Textiles. Concept by <a href="https://irepute.in/" > repute</a> </p>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-6">
                <ul>
                  <li>
                    <Link href="#">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="#">Terms & Conditions</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="circle-map">
          <img src="/images/circle-map.png" alt="image" />
        </div>
        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
