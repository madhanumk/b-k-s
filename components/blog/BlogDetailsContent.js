import React from "react";
import Link from "next/link";
import BlogSidebar from "./BlogSidebar";

const BlogDetailsContent = () => {
  return (
    <>
      <div className="blog-details-area ptb-110">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="blog-details">
                <div className="article-image">
                  <img src="/images/blog/1.jpg" alt="image" />
                </div>

                <div className="article-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <i className="far fa-user-circle"></i> By:{" "}
                        <a href="#">Admin</a>
                      </li>
                      <li>
                        <i className="far fa-calendar-alt"></i> 7 Aug 2023
                      </li>
                      <li>
                        <i className="far fa-comment-dots"></i>{" "}
                        <a href="#">3 Comments</a>
                      </li>
                    </ul>
                  </div>

                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry’s
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>

                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry’s
                    standard dummy text ever since the 1500s, when an unknown
                    printer took.
                  </p>

                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry’s
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>

                  <blockquote className="wp-block-quote">
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>

                    <cite>Tom Cruise</cite>
                  </blockquote>

                  <p>
                    Equidem impedit officiis quo te. Illud partem sententiae mel
                    eu, euripidis urbanitas et sit. Mediocrem reprimique an vim,
                    veniam tibique omittantur duo ut, agam graeci in vim. Quot
                    appetere patrioque te mea, animal aliquip te pri. Ad vis
                    animal ceteros percipitur, eos tollit civibus percipitur no.
                  </p>

                  <ul className="wp-block-gallery columns-3">
                    <li className="blocks-gallery-item">
                      <figure>
                        <img src="/images/blog/2.jpg" alt="image" />
                      </figure>
                    </li>

                    <li className="blocks-gallery-item">
                      <figure>
                        <img src="/images/blog/3.jpg" alt="image" />
                      </figure>
                    </li>

                    <li className="blocks-gallery-item">
                      <figure>
                        <img src="/images/blog/4.jpg" alt="image" />
                      </figure>
                    </li>
                  </ul>

                  <h3>10 Tactics for marketing your company</h3>

                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry’s
                    standard dummy text ever since the 1500s, when an unknown
                    printer took.
                  </p>

                  <ul className="article-features-list">
                    <li>Devices can grind down to a halt.</li>
                    <li>Small companies Reairing business.</li>
                    <li>Repairs are competitive with anyone</li>
                    <li>Repair broken buttons, speakers</li>
                    <li>Repairs are competitive with anyone</li>
                  </ul>

                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry’s
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>

                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry’s
                    standard dummy text ever since the 1500s, when an unknown
                    printer took.
                  </p>

                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry’s
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>
                </div>

                <div className="article-footer">
                  <div className="article-tags">
                    <span>
                      <i className="fas fa-bookmark"></i>
                    </span>
                    <Link href="#">Fashion</Link>, <Link href="#">Games</Link>,{" "}
                    <Link href="#">Travel</Link>
                  </div>

                  <div className="article-share">
                    <ul className="social">
                      <li>
                        <a href="https://www.facebook.com/" target="_blank">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.twitter.com/" target="_blank">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/" target="_blank">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/" target="_blank">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="comments-area">
                <h3 className="comments-title">2 Comments:</h3>

                <ol className="comment-list">
                  <li className="comment">
                    <div className="comment-body">
                      <footer className="comment-meta">
                        <div className="comment-author vcard">
                          <img
                            src="/images/author1.jpg"
                            className="avatar"
                            alt="image"
                          />
                          <b className="fn">James Anderson</b>
                          <span className="says">says:</span>
                        </div>

                        <div className="comment-metadata">
                          April 24, 2023 at 10:59 am
                        </div>
                      </footer>

                      <div className="comment-content">
                        <p>
                          Lorem Ipsum has been the industry’s standard dummy
                          text ever since the 1500s, when an unknown printer
                          took a galley of type and scrambled it to make a type
                          specimen book.
                        </p>
                      </div>

                      <div className="reply">
                        <a href="#" className="comment-reply-link">
                          Reply
                        </a>
                      </div>
                    </div>

                    <ol className="children">
                      <li className="comment">
                        <div className="comment-body">
                          <footer className="comment-meta">
                            <div className="comment-author vcard">
                              <img
                                src="/images/author2.jpg"
                                className="avatar"
                                alt="image"
                              />
                              <b className="fn">Steven Smith</b>
                              <span className="says">says:</span>
                            </div>

                            <div className="comment-metadata">
                              April 24, 2023 at 10:59 am
                            </div>
                          </footer>

                          <div className="comment-content">
                            <p>
                              Lorem Ipsum has been the industry’s standard dummy
                              text ever since the 1500s, when an unknown printer
                              took a galley of type and scrambled it to make a
                              type specimen book.
                            </p>
                          </div>

                          <div className="reply">
                            <a href="#" className="comment-reply-link">
                              Reply
                            </a>
                          </div>
                        </div>
                      </li>

                      <ol className="children">
                        <li className="comment">
                          <div className="comment-body">
                            <footer className="comment-meta">
                              <div className="comment-author vcard">
                                <img
                                  src="/images/author3.jpg"
                                  className="avatar"
                                  alt="image"
                                />
                                <b className="fn">Sarah Taylor</b>
                                <span className="says">says:</span>
                              </div>

                              <div className="comment-metadata">
                                April 24, 2023 at 10:59 am
                              </div>
                            </footer>

                            <div className="comment-content">
                              <p>
                                Lorem Ipsum has been the industry’s standard
                                dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it
                                to make a type specimen book.
                              </p>
                            </div>

                            <div className="reply">
                              <a href="#" className="comment-reply-link">
                                Reply
                              </a>
                            </div>
                          </div>
                        </li>
                      </ol>
                    </ol>
                  </li>

                  <li className="comment">
                    <div className="comment-body">
                      <footer className="comment-meta">
                        <div className="comment-author vcard">
                          <img
                            src="/images/author2.jpg"
                            className="avatar"
                            alt="image"
                          />
                          <b className="fn">John Doe</b>
                          <span className="says">says:</span>
                        </div>

                        <div className="comment-metadata">
                          April 24, 2023 at 10:59 am
                        </div>
                      </footer>

                      <div className="comment-content">
                        <p>
                          Lorem Ipsum has been the industry’s standard dummy
                          text ever since the 1500s, when an unknown printer
                          took a galley of type and scrambled it to make a type
                          specimen book.
                        </p>
                      </div>

                      <div className="reply">
                        <a href="#" className="comment-reply-link">
                          Reply
                        </a>
                      </div>
                    </div>

                    <ol className="children">
                      <li className="comment">
                        <div className="comment-body">
                          <footer className="comment-meta">
                            <div className="comment-author vcard">
                              <img
                                src="/images/author4.jpg"
                                className="avatar"
                                alt="image"
                              />
                              <b className="fn">James Anderson</b>
                              <span className="says">says:</span>
                            </div>

                            <div className="comment-metadata">
                              April 24, 2023 at 10:59 am
                            </div>
                          </footer>

                          <div className="comment-content">
                            <p>
                              Lorem Ipsum has been the industry’s standard dummy
                              text ever since the 1500s, when an unknown printer
                              took a galley of type and scrambled it to make a
                              type specimen book.
                            </p>
                          </div>

                          <div className="reply">
                            <a href="#" className="comment-reply-link">
                              Reply
                            </a>
                          </div>
                        </div>
                      </li>
                    </ol>
                  </li>
                </ol>

                {/* Comment form */}
                <div className="comment-respond">
                  <h3 className="comment-reply-title">Leave a Reply</h3>

                  <form className="comment-form">
                    <p className="comment-notes">
                      <span id="email-notes">
                        Your email address will not be published.
                      </span>
                      Required fields are marked
                      <span className="required">*</span>
                    </p>

                    <p className="comment-form-comment">
                      <label>Comment</label>
                      <textarea
                        name="comment"
                        id="comment"
                        cols="45"
                        rows="5" 
                        required={true}
                      />
                    </p>

                    <p className="comment-form-author">
                      <label>
                        Name <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        id="author"
                        name="author"
                        required={true}
                      />
                    </p>

                    <p className="comment-form-email">
                      <label>
                        Email <span className="required">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required={true}
                      />
                    </p>

                    <p className="comment-form-url">
                      <label>Website</label>
                      <input type="url" id="url" name="url" />
                    </p>

                    <p className="comment-form-cookies-consent">
                      <input
                        type="checkbox"
                        value="yes"
                        name="wp-comment-cookies-consent"
                        id="wp-comment-cookies-consent"
                      />
                      <label htmlFor="wp-comment-cookies-consent">
                        Save my name, email, and website in this browser for the
                        next time I comment.
                      </label>
                    </p>
                    
                    <p className="form-submit">
                      <input
                        type="submit"
                        name="submit"
                        id="submit"
                        className="submit"
                        value="Post Comment"
                      />
                    </p>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetailsContent;
