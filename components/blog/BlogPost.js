import React from "react";
import Link from "next/link";

const BlogPost = () => {
  return (
    <>
      <div className="blog-area ptb-110">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="entry-thumbnail">
                  <Link href="/blog-details">
                    <img src="/images/blog/1.jpg" alt="image" />
                  </Link>
                </div>

                <div className="entry-post-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <Link href="#">Admin</Link>
                      </li>
                      <li>August 15, 2023</li>
                    </ul>
                  </div>

                  <h3>
                    <Link href="/blog-details">
                      Making Peace With The Feast Or Famine Of Freelancing
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod...
                  </p>
                  <Link href="/blog-details" className="read-more-btn">
                    Read More <i className="flaticon-add-1"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="entry-thumbnail">
                  <Link href="/blog-details">
                    <img src="/images/blog/2.jpg" alt="image" />
                  </Link>
                </div>

                <div className="entry-post-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <Link href="#">Admin</Link>
                      </li>
                      <li>August 18, 2023</li>
                    </ul>
                  </div>

                  <h3>
                    <Link href="/blog-details">
                      I Used The Web For A Day On A 50 MB Budget
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod...
                  </p>
                  <Link href="/blog-details" className="read-more-btn">
                    Read More <i className="flaticon-add-1"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="entry-thumbnail">
                  <Link href="/blog-details">
                    <img src="/images/blog/3.jpg" alt="image" />
                  </Link>
                </div>

                <div className="entry-post-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <Link href="#">Admin</Link>
                      </li>
                      <li>August 15, 2023</li>
                    </ul>
                  </div>

                  <h3>
                    <Link href="/blog-details">
                      Here are the 5 most telling signs of micromanagement
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod...
                  </p>
                  <Link href="/blog-details" className="read-more-btn">
                    Read More <i className="flaticon-add-1"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="entry-thumbnail">
                  <Link href="/blog-details">
                    <img src="/images/blog/4.jpg" alt="image" />
                  </Link>
                </div>

                <div className="entry-post-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <Link href="#">Admin</Link>
                      </li>
                      <li>August 15, 2023</li>
                    </ul>
                  </div>

                  <h3>
                    <Link href="/blog-details">
                      Add And Show Image With Size From Elementor Widget
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod...
                  </p>
                  <Link href="/blog-details" className="read-more-btn">
                    Read More <i className="flaticon-add-1"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="entry-thumbnail">
                  <Link href="/blog-details">
                    <img src="/images/blog/5.jpg" alt="image" />
                  </Link>
                </div>

                <div className="entry-post-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <Link href="#">Admin</Link>
                      </li>
                      <li>August 18, 2023</li>
                    </ul>
                  </div>

                  <h3>
                    <Link href="/blog-details">
                      How To The Active Menu Based On URL In Next.JS?
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod...
                  </p>
                  <Link href="/blog-details" className="read-more-btn">
                    Read More <i className="flaticon-add-1"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="entry-thumbnail">
                  <Link href="/blog-details">
                    <img src="/images/blog/6.jpg" alt="image" />
                  </Link>
                </div>

                <div className="entry-post-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <Link href="#">Admin</Link>
                      </li>
                      <li>August 15, 2023</li>
                    </ul>
                  </div>

                  <h3>
                    <Link href="/blog-details">
                      Instagram Feed Add To Your WordPress Site
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod...
                  </p>
                  <Link href="/blog-details" className="read-more-btn">
                    Read More <i className="flaticon-add-1"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="pagination-area">
                <a href="#" className="prev page-numbers">
                  <i className="fas fa-angle-double-left"></i>
                </a>
                <a href="#" className="page-numbers">
                  1
                </a>
                <span className="page-numbers current" aria-current="page">
                  2
                </span>
                <a href="#" className="page-numbers">
                  3
                </a>
                <a href="#" className="page-numbers">
                  4
                </a>
                <a href="#" className="next page-numbers">
                  <i className="fas fa-angle-double-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
