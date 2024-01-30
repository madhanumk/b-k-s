import React from "react";
import Link from "next/link";

const Featured = () => {
  return (
    <>
      <div className="featured-services-area">
        <div className="container">
          <div className="featured-services-inner">
            <div className="row m-0">
              <div className="col-lg-4 col-md-6 col-sm-6 p-0">
                <div className="single-featured-services-box">
                  <div className="icon">
                    <i className="flaticon-robot"></i>
                  </div>

                  <h3>
                    <Link href="/single-services">
                      Robotic Process Automation
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore. Ut enim ad minim
                    veniam.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6 p-0">
                <div className="single-featured-services-box">
                  <div className="icon">
                    <i className="flaticon-artificial-intelligence"></i>
                  </div>

                  <h3>
                    <Link href="/single-services">Cognitive Automation</Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore. Ut enim ad minim
                    veniam.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6 p-0">
                <div className="single-featured-services-box">
                  <div className="icon">
                    <i className="flaticon-machine-learning"></i>
                  </div>

                  <h3>
                    <Link href="/single-services">Cognitive Engagement</Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore. Ut enim ad minim
                    veniam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
