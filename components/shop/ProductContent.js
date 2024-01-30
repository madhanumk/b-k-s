import React from "react";
import Link from "next/link";

const ProductContent = () => {
  return (
    <>
      <section className="shop-area ptb-110">
        <div className="container">
          <div className="woocommerce-topbar">
            <div className="row align-items-center">
              <div className="col-lg-8 col-md-7 col-sm-6">
                <div className="woocommerce-result-count">
                  <p>Showing 1-8 of 14 results</p>
                </div>
              </div>

              <div className="col-lg-4 col-md-5 col-sm-6">
                <div className="woocommerce-topbar-ordering">
                  <select>
                    <option value="1">Default sorting</option>
                    <option value="2">Sort by popularity</option>
                    <option value="0">Sort by average rating</option>
                    <option value="3">Sort by latest</option>
                    <option value="4">Sort by price: low to high</option>
                    <option value="5">Sort by price: high to low</option>
                    <option value="6">Sort by new</option>
                  </select> 
                </div>
              </div>
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

                  <button type="button" className="btn add-to-cart-btn rounded-0">
                    Add To Cart <i className="flaticon-shopping-basket"></i>
                  </button>
                </div>

                <div className="product-content">
                  <h3>
                    <Link href="#">White Book</Link>
                  </h3>
                  <div className="price">
                    <span className="new">$8.50</span>
                    <span className="old">$12.50</span>
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

                  <button type="button" className="btn add-to-cart-btn rounded-0">
                    Add To Cart <i className="flaticon-shopping-basket"></i>
                  </button>

                  <div className="sale-btn">Sale!</div>
                </div>

                <div className="product-content">
                  <h3>
                    <Link href="#">Red Side Book</Link>
                  </h3>
                  <div className="price">
                    <span className="new">$12.50</span>
                    <span className="old">$20.50</span>
                  </div>
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
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

                  <button type="button" className="btn add-to-cart-btn rounded-0">
                    Add To Cart <i className="flaticon-shopping-basket"></i>
                  </button>
                </div>

                <div className="product-content">
                  <h3>
                    <Link href="#">Book With Pen</Link>
                  </h3>
                  <div className="price">
                    <span className="new">$8.50</span>
                    <span className="old">$12.50</span>
                  </div>
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-product-box">
                <div className="product-image">
                  <Link href="#">
                    <img src="/images/shop/4.jpg" alt="image" />
                    <img src="/images/shop/4-1.jpg" alt="image" />
                  </Link>

                  <button type="button" className="btn add-to-cart-btn rounded-0">
                    Add To Cart <i className="flaticon-shopping-basket"></i>
                  </button>
                </div>

                <div className="product-content">
                  <h3>
                    <Link href="#">Drop Side Book</Link>
                  </h3>
                  <div className="price">
                    <span className="new">$7.50</span>
                    <span className="old">$11.50</span>
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
                    <img src="/images/shop/5.jpg" alt="image" />
                    <img src="/images/shop/5-1.jpg" alt="image" />
                  </Link>

                  <button type="button" className="btn add-to-cart-btn rounded-0">
                    Add To Cart <i className="flaticon-shopping-basket"></i>
                  </button>
                </div>

                <div className="product-content">
                  <h3>
                    <Link href="#">Color Book</Link>
                  </h3>
                  <div className="price">
                    <span className="new">$10.50</span>
                  </div>
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-product-box">
                <div className="product-image">
                  <Link href="#">
                    <img src="/images/shop/6.jpg" alt="image" />
                    <img src="/images/shop/6-1.jpg" alt="image" />
                  </Link>

                  <button type="button" className="btn add-to-cart-btn rounded-0">
                    Add To Cart <i className="flaticon-shopping-basket"></i>
                  </button>
                </div>

                <div className="product-content">
                  <h3>
                    <Link href="#">Last Book</Link>
                  </h3>
                  <div className="price">
                    <span className="new">$15.00</span>
                    <span className="old">$20.50</span>
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
      </section>
    </>
  );
};

export default ProductContent;
