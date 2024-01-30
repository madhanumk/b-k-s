import React from "react";

const Team = () => {
  return (
    <>
      <div className="team-area bg-fafafa">
        <div className="container">
          <div className="section-title">
            <h2>Meet Our Team</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-team-box">
                <div className="image">
                  <img src="/images/team/1.jpg" alt="team" />

                  <div className="social">
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://www.twitter.com/" target="_blank">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>

                <div className="content">
                  <h3>John Smith</h3>
                  <span>Web Developer</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-team-box">
                <div className="image">
                  <img src="/images/team/2.jpg" alt="team" />

                  <div className="social">
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://www.twitter.com/" target="_blank">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>

                <div className="content">
                  <h3>Lucy Eva</h3>
                  <span>Manager</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-team-box">
                <div className="image">
                  <img src="/images/team/3.jpg" alt="team" />

                  <div className="social">
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://www.twitter.com/" target="_blank">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>

                <div className="content">
                  <h3>Steven Smith</h3>
                  <span>Web Developer</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-team-box">
                <div className="image">
                  <img src="/images/team/4.jpg" alt="team" />

                  <div className="social">
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://www.twitter.com/" target="_blank">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>

                <div className="content">
                  <h3>Sarah Taylor</h3>
                  <span>Desginer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
