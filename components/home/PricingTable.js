import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const PricingTable = () => {
  return (
    <>
      <div className="pricing-area ptb-110 bg-fafafa">
        <div className="container">
          <div className="section-title">
            <h2>Our Pricing Plan</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="pricing-tab">
            <Tabs>
              <TabList>
                <Tab>Monthly Plan</Tab>
                <Tab>Yearly Plan</Tab>
              </TabList>

              <TabPanel>
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="single-pricing-box">
                      <div className="pricing-header">
                        <h3>Free</h3>
                        <p>
                          Get your business up <br />
                          and running
                        </p>
                      </div>

                      <div className="price">
                        $0 <span>/m</span>
                      </div>

                      <div className="buy-btn">
                        <a href="#" className="btn btn-primary">
                          Get Started Free
                        </a>
                      </div>

                      <ul className="pricing-features">
                        <li>
                          <i className="bx bx-check"></i> Drag & Drop Builder
                        </li>
                        <li>
                          <i className="bx bx-check"></i> Lead Generation &
                          Sales
                        </li>
                        <li>
                          <i className="bx bx-check"></i> Boot & Digital
                          Assistants
                        </li>
                        <li>
                          <i className="bx bx-check"></i> Customer Service
                        </li>
                        <li>
                          <i className="bx bx-check"></i> Up to 100 Subscribers
                        </li>
                        <li>
                          <i className="bx bx-check"></i> Unlimited Broadcasts
                        </li>
                        <li>
                          <i className="bx bx-check"></i> Landing Pages & Web
                          Widgets
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="single-pricing-box">
                      <div className="pricing-header">
                        <h3>Pro</h3>
                        <p>
                          Get your business up <br />
                          and running
                        </p>
                      </div>

                      <div className="price">
                        $149 <span>/m</span>
                      </div>

                      <div className="buy-btn">
                        <a href="#" className="btn btn-primary">
                          Get Started Free
                        </a>
                      </div>

                      <ul className="pricing-features">
                        <li>
                          <i className="bx bx-check"></i> Drag & Drop Builder
                        </li>
                        <li>
                          <i className="bx bx-check"></i> Lead Generation &
                          Sales
                        </li>
                        <li>
                          <i className="bx bx-check"></i> Boot & Digital
                          Assistants
                        </li>
                        <li>
                          <i className="bx bx-check"></i> Customer Service
                        </li>
                        <li>
                          <i className="bx bx-check"></i> Up to 3200 Subscribers
                        </li>
                        <li>
                          <i className="bx bx-check"></i> Unlimited Broadcasts
                        </li>
                        <li>
                          <i className="bx bx-check"></i> Landing Pages & Web
                          Widgets
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="single-pricing-box">
                      <div className="pricing-header">
                        <h3>Premium</h3>
                        <p>
                          Get your business up <br />
                          and running
                        </p>
                      </div>

                      <div className="price">
                        $179 <span>/m</span>
                      </div>

                      <div className="buy-btn">
                        <a href="#" className="btn btn-primary">
                          Get Started Free
                        </a>
                      </div>

                      <ul className="pricing-features">
                        <li>
                          <i className="bx bx-check"></i> Drag & Drop Builder
                        </li>
                        <li>
                          <i className="bx bx-check"></i> Lead Generation &
                          Sales
                        </li>
                        <li>
                          <i className="bx bx-check"></i> Boot & Digital
                          Assistants
                        </li>
                        <li>
                          <i className="bx bx-check"></i> Customer Service
                        </li>
                        <li>
                          <i className="bx bx-check"></i> Up to 2000 Subscribers
                        </li>
                        <li>
                          <i className="bx bx-check"></i> Unlimited Broadcasts
                        </li>
                        <li>
                          <i className="bx bx-check"></i> Landing Pages & Web
                          Widgets
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="single-pricing-box">
                      <div className="pricing-header">
                        <h3>Free</h3>
                        <p>
                          Get your business up <br />
                          and running
                        </p>
                      </div>

                      <div className="price">
                        $0 <span>/y</span>
                      </div>

                      <div className="buy-btn">
                        <a href="#" className="btn btn-primary">
                          Get Started Free
                        </a>
                      </div>

                      <ul className="pricing-features">
                        <li>
                          <i className="bx bx-check"></i> Drag & Drop Builder
                        </li>
                        <li>
                          <i className="bx bx-check"></i> Lead Generation &
                          Sales
                        </li>
                        <li>
                          <i className="bx bx-check"></i> Boot & Digital
                          Assistants
                        </li>
                        <li>
                          <i className="bx bx-check"></i> Customer Service
                        </li>
                        <li>
                          <i className="bx bx-check"></i> Up to 1000 Subscribers
                        </li>
                        <li>
                          <i className="bx bx-check"></i> Unlimited Broadcasts
                        </li>
                        <li>
                          <i className="bx bx-check"></i> Landing Pages & Web
                          Widgets
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="single-pricing-box">
                      <div className="pricing-header">
                        <h3>Pro</h3>
                        <p>
                          Get your business up <br />
                          and running
                        </p>
                      </div>

                      <div className="price">
                        $249 <span>/y</span>
                      </div>

                      <div className="buy-btn">
                        <a href="#" className="btn btn-primary">
                          Get Started Free
                        </a>
                      </div>

                      <ul className="pricing-features">
                        <li>
                          <i className="bx bx-check"></i> Drag & Drop Builder
                        </li>
                        <li>
                          <i className="bx bx-check"></i> Lead Generation &
                          Sales
                        </li>
                        <li>
                          <i className="bx bx-check"></i> Boot & Digital
                          Assistants
                        </li>
                        <li>
                          <i className="bx bx-check"></i> Customer Service
                        </li>
                        <li>
                          <i className="bx bx-check"></i> Up to 3300 Subscribers
                        </li>
                        <li>
                          <i className="bx bx-check"></i> Unlimited Broadcasts
                        </li>
                        <li>
                          <i className="bx bx-check"></i> Landing Pages & Web
                          Widgets
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="single-pricing-box">
                      <div className="pricing-header">
                        <h3>Premium</h3>
                        <p>
                          Get your business up <br />
                          and running
                        </p>
                      </div>

                      <div className="price">
                        $279 <span>/y</span>
                      </div>

                      <div className="buy-btn">
                        <a href="#" className="btn btn-primary">
                          Get Started Free
                        </a>
                      </div>

                      <ul className="pricing-features">
                        <li>
                          <i className="bx bx-check"></i> Drag & Drop Builder
                        </li>
                        <li>
                          <i className="bx bx-check"></i> Lead Generation &
                          Sales
                        </li>
                        <li>
                          <i className="bx bx-check"></i> Boot & Digital
                          Assistants
                        </li>
                        <li>
                          <i className="bx bx-check"></i> Customer Service
                        </li>
                        <li>
                          <i className="bx bx-check"></i> Up to 10000
                          Subscribers
                        </li>
                        <li>
                          <i className="bx bx-check"></i> Unlimited Broadcasts
                        </li>
                        <li>
                          <i className="bx bx-check"></i> Landing Pages & Web
                          Widgets
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>

        {/* Shape images */}
        <div className="shape-img2">
          <img src="/images/shape/2.svg" alt="image" />
        </div>
        <div className="shape-img3">
          <img src="/images/shape/3.png" alt="image" />
        </div>
        <div className="shape-img4">
          <img src="/images/shape/4.svg" alt="image" />
        </div>
        <div className="shape-img5">
          <img src="/images/shape/5.svg" alt="image" />
        </div>
        <div className="shape-img7">
          <img src="/images/shape/3.png" alt="image" />
        </div>
        <div className="dot-shape1">
          <img src="/images/shape/dot1.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot3.png" alt="image" />
        </div>
        <div className="dot-shape4">
          <img src="/images/shape/dot4.png" alt="image" />
        </div>
        <div className="dot-shape5">
          <img src="/images/shape/dot5.png" alt="image" />
        </div>
        <div className="dot-shape6">
          <img src="/images/shape/dot6.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default PricingTable;
