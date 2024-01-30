import React from "react";
import Link from "next/link";

const BlogSidebar = () => {
  return (
    <>
      <div className="widget-area" id="secondary">
        <div className="widget widget_search">
          <form className="search-form">
            <label>
              <input
                type="search"
                className="search-field"
                placeholder="Search..."
              />
            </label>
            <button type="submit">
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div>

        <div className="widget widget_evolta_posts_thumb">
          <h3 className="widget-title">Popular Posts</h3>

          <div className="item">
            <Link href="#" className="thumb">
              <span
                className="fullimage cover"
                role="img"
                style={{ backgroundImage: `url(/images/blog/1.jpg)` }}
              ></span>
            </Link>
            <div className="info">
              <time dateTime="2023-06-30">June 10, 2023</time>
              <h4 className="title usmall">
                <Link href="#">
                  Making Peace With The Feast Or Famine Of Freelancing
                </Link>
              </h4>
            </div>

            <div className="clear"></div>
          </div>

          <div className="item">
            <Link href="#" className="thumb">
              <span
                className="fullimage cover"
                role="img"
                style={{ backgroundImage: `url(/images/blog/2.jpg)` }}
              ></span>
            </Link>
            <div className="info">
              <time dateTime="2023-06-30">June 21, 2023</time>
              <h4 className="title usmall">
                <Link href="#">I Used The Web For A Day On A 50 MB Budget</Link>
              </h4>
            </div>

            <div className="clear"></div>
          </div>

          <div className="item">
            <Link href="#" className="thumb">
              <span
                className="fullimage cover"
                role="img"
                style={{ backgroundImage: `url(/images/blog/3.jpg)` }}
              ></span>
            </Link>
            <div className="info">
              <time dateTime="2023-06-30">June 30, 2023</time>
              <h4 className="title usmall">
                <Link href="#">How To Create A Responsive Popup Gallery?</Link>
              </h4>
            </div>

            <div className="clear"></div>
          </div>
        </div>

        <div className="widget widget_recent_entries">
          <h3 className="widget-title">Recent Posts</h3>

          <ul>
            <li>
              <Link href="#">
                How to Become a Successful Entry Level UX Designer
              </Link>
            </li>
            <li>
              <Link href="#">
                How to start your business as an entrepreneur
              </Link>
            </li>
            <li>
              <Link href="#">How to be a successful entrepreneur</Link>
            </li>
            <li>
              <Link href="#">10 Building Mobile Apps With Ionic And React</Link>
            </li>
            <li>
              <Link href="#">Protect your workplace from cyber attacks</Link>
            </li>
          </ul>
        </div>

        <div className="widget widget_categories">
          <h3 className="widget-title">Categories</h3>

          <ul>
            <li>
              <Link href="#">Business</Link>
            </li>
            <li>
              <Link href="#">Privacy</Link>
            </li>
            <li>
              <Link href="#">Technology</Link>
            </li>
            <li>
              <Link href="#">Tips</Link>
            </li>
            <li>
              <Link href="#">Uncategorized</Link>
            </li>
          </ul>
        </div>

        <div className="widget widget_tag_cloud">
          <h3 className="widget-title">Tags</h3>

          <div className="tagcloud">
            <Link href="#">
              IT <span className="tag-link-count"> (3)</span>
            </Link>
            <Link href="#">
              Evolta <span className="tag-link-count"> (3)</span>
            </Link>
            <Link href="#">
              Games <span className="tag-link-count"> (2)</span>
            </Link>
            <Link href="#">
              Fashion <span className="tag-link-count"> (2)</span>
            </Link>
            <Link href="#">
              Travel <span className="tag-link-count"> (1)</span>
            </Link>
            <Link href="#">
              Smart <span className="tag-link-count"> (1)</span>
            </Link>
            <Link href="#">
              Marketing <span className="tag-link-count"> (1)</span>
            </Link>
            <Link href="#">
              Tips <span className="tag-link-count"> (2)</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSidebar;
