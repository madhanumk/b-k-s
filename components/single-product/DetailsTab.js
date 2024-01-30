import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const DetailsTab = () => {
  return (
    <>
      <div className="col-lg-12 col-md-12">
        <div className="products-details-tab">
          <Tabs>
            <TabList>
              <Tab>Description</Tab>
              <Tab>Additional information</Tab>
              <Tab>Reviews</Tab>
            </TabList>

            <TabPanel>
              <div className="products-details-tab-content">
                <p>
                  Design inspiration lorem ipsum dolor sit amet, consectetuer
                  adipiscing elit. Morbi commodo, ipsum sed pharetra gravida,
                  orci magna rhoncus neque, id pulvinar odio lorem non turpis.
                  Nullam sit amet enim. Suspendisse id velit vitae ligula
                  volutpat condimentum. Aliquam erat volutpat. Sed quis velit.
                  Nulla facilisi. Nulla libero. Vivamus pharetra posuere sapien.
                  Nam consectetuer. Sed aliquam, nunc eget euismod ullamcorper,
                  lectus nunc ullamcorper orci, fermentum bibendum enim nibh
                  eget ipsum. Nam consectetuer. Sed aliquam, nunc eget euismod
                  ullamcorper, lectus nunc ullamcorper orci, fermentum bibendum
                  enim nibh eget ipsum. Nulla libero. Vivamus pharetra posuere
                  sapien.
                </p>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="products-details-tab-content">
                <ul className="additional-information">
                  <li>
                    <span>Brand:</span> ThemeForest
                  </li>
                  <li>
                    <span>Color:</span> Brown
                  </li>
                  <li>
                    <span>Size:</span> Large, Medium
                  </li>
                  <li>
                    <span>Weight:</span> 27 kg
                  </li>
                  <li>
                    <span>Dimensions:</span> 16 x 22 x 123 cm
                  </li>
                </ul>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="products-details-tab-content">
                <div className="product-review-form">
                  <h3>Customer Reviews</h3>

                  <div className="review-title">
                    <div className="rating">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="far fa-star"></i>
                    </div>
                    <p>Based on 3 reviews</p>

                    <a href="#" className="btn btn-primary">
                      Write a Review
                    </a>
                  </div>

                  <div className="review-comments">
                    <div className="review-item">
                      <div className="rating">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                      </div>
                      <h3>Good</h3>
                      <span>
                        <strong>Admin</strong> on <strong>Sep 21, 2023</strong>
                      </span>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation.
                      </p>

                      <a href="#" className="review-report-link">
                        Report as Inappropriate
                      </a>
                    </div>

                    <div className="review-item">
                      <div className="rating">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                      </div>
                      <h3>Good</h3>
                      <span>
                        <strong>Admin</strong> on <strong>Sep 21, 2023</strong>
                      </span>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation.
                      </p>

                      <a href="#" className="review-report-link">
                        Report as Inappropriate
                      </a>
                    </div>

                    <div className="review-item">
                      <div className="rating">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                      </div>
                      <h3>Good</h3>
                      <span>
                        <strong>Admin</strong> on <strong>Sep 21, 2023</strong>
                      </span>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation.
                      </p>

                      <a href="#" className="review-report-link">
                        Report as Inappropriate
                      </a>
                    </div>
                  </div>

                  <div className="review-form">
                    <h3>Write a Review</h3>

                    <form>
                      <div className="row">
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Name</label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              placeholder="Enter your name"
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Email</label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              placeholder="Enter your email"
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                          <div className="form-group">
                            <label>Review Title</label>
                            <input
                              type="text"
                              id="review-title"
                              name="review-title"
                              placeholder="Enter your review a title"
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                          <div className="form-group">
                            <label>Body of Review (1500)</label>
                            <textarea
                              name="review-body"
                              id="review-body"
                              cols="30"
                              rows="7"
                              placeholder="Write your comments here"
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                          <button type="submit" className="btn btn-primary">
                            Submit Review
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default DetailsTab;
