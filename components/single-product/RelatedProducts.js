import React from "react";
import Link from "next/link";

const RelatedProducts = () => {
  return (
    <>
      <div className="related-products">
        <div className="container">
          <div className="section-title">
            <div className="content">
              <span>Our Shop</span>
              <h2>Related Products</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-product-box">
                <div className="product-image">
                  <Link href="#">
                    <img src="/images/shop/1.jpg" alt="image" />
                    <img src="/images/shop/1-1.jpg" alt="image" />
                  </Link>

                  <a className="add-to-cart-btn" href="#">
                    Add To Cart <i className="flaticon-shopping-basket"></i>
                  </a>
                </div>
                <div className="product-content">
                  <h3>
                    <Link href="/product-details/">White Book</Link>
                  </h3>
                  <div className="price">
                    <span className="new">$8.5</span>
                    <span className="old">$12.5</span>
                  </div>
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-product-box">
                <div className="product-image">
                  <Link href="#">
                    <img src="/images/shop/2.jpg" alt="image" />
                    <img src="/images/shop/2-1.jpg" alt="image" />
                  </Link>
                  <a className="add-to-cart-btn" href="#">
                    Add To Cart <i className="flaticon-shopping-basket"></i>
                  </a>
                </div>
                <div className="product-content">
                  <h3>
                    <Link href="/product-details/">Red Side Book</Link>
                  </h3>
                  <div className="price">
                    <span className="new">$12.5</span>
                    <span className="old">$20.5</span>
                  </div>
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-product-box">
                <div className="product-image">
                  <Link href="#">
                    <img src="/images/shop/3.jpg" alt="image" />
                    <img src="/images/shop/3-1.jpg" alt="image" />
                  </Link>
                  <a className="add-to-cart-btn" href="#">
                    Add To Cart <i className="flaticon-shopping-basket"></i>
                  </a>
                </div>
                <div className="product-content">
                  <h3>
                    <Link href="/product-details/">Book With Pen</Link>
                  </h3>
                  <div className="price">
                    <span className="new">$8.5</span>
                    <span className="old">$12.5</span>
                  </div>
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RelatedProducts;
