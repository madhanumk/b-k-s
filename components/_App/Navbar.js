import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";

const Navbar = () => {
  // Add active class
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();
  // console.log(router.asPath)

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router]);

  // Search Modal
  const [isActiveSearchModal, setActiveSearchModal] = useState("false");
  const handleToggleSearchModal = () => {
    setActiveSearchModal(!isActiveSearchModal);
  };

  const [menu, setMenu] = React.useState(true);
  const toggleNavbar = () => {
    setMenu(!menu);
  };
  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  //wordpress all slugs and content api
  useEffect(() => {
    dynamicContent();
  }, [router]);

  const dynamicContent = async () => {
    try {
      const res = await axios.get(
        "https://file.bkstextiles.in/wp-json/wp/v2/pages"
      );
      // setPost(res.data);
      console.log("dynamicContent: ", res);
    } catch (e) {
      console.log(e);
    }
  };

  const classOne = menu
    ? "collapse navbar-collapse mean-menu"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <div id="navbar" className="navbar-area">
        <div className="evolta-nav">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-xl navbar-light">
              <Link href="/" className="navbar-brand">
                <img
                  src="/images/BKS-logo-white.png"
                  alt="logo"
                  className="main-logo"
                />
                <img
                  src="/images/BKS-logo.png"
                  alt="logo"
                  className="optional-logo"
                />
              </Link>

              {/* Toggle navigation */}
              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link
                      href="/"
                      className={`nav-link ${currentPath == "/" && "active"}`}
                    >
                      Home
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/about"
                      className={`nav-link ${
                        currentPath == "/about" && "active"
                      }`}
                    >
                      About Us
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/why-bks" className="nav-link">
                      Why BKS Services <i className="fas fa-chevron-down"></i>
                    </Link>
                    <ul className="dropdown-menu">
                      {/* <li className="nav-item">
                        <Link
                          href="/why-bks"
                          className={`nav-link ${currentPath == "/why-bks/" && "active"
                            }`}
                        >
                          Why BKS Services
                        </Link>
                      </li> */}
                      <li className="nav-item">
                        <Link
                          href="/research-develeopment/"
                          className={`nav-link ${
                            currentPath == "/research-develeopment/" && "active"
                          }`}
                        >
                          Research & Develeopment
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/quality-practices"
                          className={`nav-link ${
                            currentPath == "//quality-practices/" && "active"
                          }`}
                        >
                          Quality Practices
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/sustainability"
                          className={`nav-link ${
                            currentPath == "/sustainability/" && "active"
                          }`}
                        >
                          Sustainability
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/infrastructure"
                      className={`nav-link ${
                        currentPath == "/infrastructure" && "active"
                      }`}
                    >
                      Infrastructure
                    </Link>
                  </li>

                  {/* <li className="nav-item">
                    <Link href="#" className="nav-link">
                      Infrastructure <i className="fas fa-chevron-down"></i>
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/infrastructure"
                          className={`nav-link ${currentPath == "/infrastructure/" && "active"
                            }`}
                        >
                          Infrastructure
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/processing"
                          className={`nav-link ${currentPath == "/processing/" && "active"
                            }`}
                        >
                          Processing
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/coating"
                          className={`nav-link ${currentPath == "/coating/" && "active"
                            }`}
                        >
                          Coating
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/checkout"
                          className={`nav-link ${currentPath == "/checkout/" && "active"
                            }`}
                        >
                          Checkout
                        </Link>
                      </li>
                    </ul>
                  </li> */}

                  <li className="nav-item">
                    <Link href="/products" className="nav-link">
                      Products <i className="fas fa-chevron-down"></i>
                    </Link>
                    <ul className="dropdown-menu">
                      {/* <li className="nav-item">
                        <Link
                          href="/products"
                          className={`nav-link ${currentPath == "/products/" && "active"
                            }`}
                        >
                          Products
                        </Link>
                      </li> */}

                      <li className="nav-item">
                        <Link
                          href="/hospitality-fabrics"
                          className={`nav-link ${
                            currentPath == "/single-services/" && "active"
                          }`}
                        >
                          Hospitality Linen
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/apparel-fabrics"
                          className={`nav-link ${
                            currentPath == "/apparel-fabrics/" && "active"
                          }`}
                        >
                          Apparel Fabrics
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/workwear"
                          className={`nav-link ${
                            currentPath == "/workwear/" && "active"
                          }`}
                        >
                          WorkWear
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/certifications"
                      className={`nav-link ${
                        currentPath == "/certifications/" && "active"
                      }`}
                    >
                      Certifications
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      href="/csr"
                      className={`nav-link ${
                        currentPath == "/csr/" && "active"
                      }`}
                    >
                      CSR
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      href="/career"
                      className={`nav-link ${
                        currentPath == "/career/" && "active"
                      }`}
                    >
                      Career
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      href="/contact"
                      className={`nav-link ${
                        currentPath == "/contact/" && "active"
                      }`}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* <div className="others-options">
                <Link href="/cart" className="cart-btn">
                  <i className="flaticon-commerce-and-shopping"></i>
                </Link>

                <div className="option-item">
                  <i
                    className="search-btn fas fa-search"
                    onClick={handleToggleSearchModal}
                  ></i>
                </div>

                <Link href="#" className="btn btn-primary">
                  Schedule a Demo
                </Link>
              </div> */}
            </nav>
          </div>
        </div>
      </div>

      {/* Search Form */}
      <div
        className={`search-overlay ${
          isActiveSearchModal ? "" : "search-overlay-active"
        }`}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="search-overlay-layer"></div>
            <div className="search-overlay-layer"></div>
            <div className="search-overlay-layer"></div>

            <div
              className="search-overlay-close"
              onClick={handleToggleSearchModal}
            >
              <span className="search-overlay-close-line"></span>
              <span className="search-overlay-close-line"></span>
            </div>

            <div className="search-overlay-form">
              <form>
                <input
                  type="text"
                  className="input-search"
                  placeholder="Search here..."
                />
                <button type="submit">
                  <i className="bx bx-search"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* End Search Form */}
    </>
  );
};

export default Navbar;
