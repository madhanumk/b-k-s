import React from "react";
import Link from "next/link";

const CartContent = () => {
  return (
    <>
      <div className="cart-area ptb-110">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <form>
                <div className="cart-table table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Name</th>
                        <th scope="col">Unit Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Total</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td className="product-thumbnail">
                          <Link href="#">
                            <img src="/images/shop/1.jpg" alt="item" />
                          </Link>
                        </td>

                        <td className="product-name">
                          <Link href="#">White Book</Link>
                        </td>

                        <td className="product-price">
                          <span className="unit-amount">$14.00</span>
                        </td>

                        <td className="product-quantity">
                          <div className="input-counter">
                            <span className="minus-btn">
                              <i className="fas fa-minus"></i>
                            </span>
                            <input type="text" min="1" defaultValue="1" />
                            <span className="plus-btn">
                              <i className="fas fa-plus"></i>
                            </span>
                          </div>
                        </td>

                        <td className="product-subtotal">
                          <span className="subtotal-amount">$14.00</span>

                          <button type="button" className="btn remove p-0">
                            <i className="far fa-trash-alt"></i>
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <td className="product-thumbnail">
                          <Link href="#">
                            <img src="/images/shop/2.jpg" alt="item" />
                          </Link>
                        </td>

                        <td className="product-name">
                          <a href="#">Red Side Book</a>
                        </td>

                        <td className="product-price">
                          <span className="unit-amount">$20.00</span>
                        </td>

                        <td className="product-quantity">
                          <div className="input-counter">
                            <span className="minus-btn">
                              <i className="fas fa-minus"></i>
                            </span>
                            <input type="text" min="1" defaultValue="1" />
                            <span className="plus-btn">
                              <i className="fas fa-plus"></i>
                            </span>
                          </div>
                        </td>

                        <td className="product-subtotal">
                          <span className="subtotal-amount">$20.00</span>

                          <button type="button" className="btn remove p-0">
                            <i className="far fa-trash-alt"></i>
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <td className="product-thumbnail">
                          <Link href="#">
                            <img src="/images/shop/3.jpg" alt="item" />
                          </Link>
                        </td>

                        <td className="product-name">
                          <Link href="#">Book With Pen</Link>
                        </td>

                        <td className="product-price">
                          <span className="unit-amount">$25.00</span>
                        </td>

                        <td className="product-quantity">
                          <div className="input-counter">
                            <span className="minus-btn">
                              <i className="fas fa-minus"></i>
                            </span>
                            <input type="text" min="1" defaultValue="1" />
                            <span className="plus-btn">
                              <i className="fas fa-plus"></i>
                            </span>
                          </div>
                        </td>

                        <td className="product-subtotal">
                          <span className="subtotal-amount">$25.00</span>

                          <button type="button" className="btn remove p-0">
                            <i className="far fa-trash-alt"></i>
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <td className="product-thumbnail">
                          <Link href="#">
                            <img src="/images/shop/4.jpg" alt="item" />
                          </Link>
                        </td>

                        <td className="product-name">
                          <a href="#">Drop Side Book</a>
                        </td>

                        <td className="product-price">
                          <span className="unit-amount">$10.00</span>
                        </td>

                        <td className="product-quantity">
                          <div className="input-counter">
                            <span className="minus-btn">
                              <i className="fas fa-minus"></i>
                            </span>
                            <input type="text" min="1" defaultValue="1" />
                            <span className="plus-btn">
                              <i className="fas fa-plus"></i>
                            </span>
                          </div>
                        </td>

                        <td className="product-subtotal">
                          <span className="subtotal-amount">$10.00</span>

                          <button type="button" className="btn remove p-0">
                            <i className="far fa-trash-alt"></i>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="cart-buttons">
                  <div className="row align-items-center">
                    <div className="col-lg-7 col-sm-7 col-md-7">
                      <div className="shopping-coupon-code">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Coupon code"
                          name="coupon-code"
                          id="coupon-code"
                        />
                        <button type="submit">Apply Coupon</button>
                      </div>
                    </div>

                    <div className="col-lg-5 col-sm-5 col-md-5 text-end">
                      <a href="#" className="btn btn-primary">
                        Update Cart
                      </a>
                    </div>
                  </div>
                </div>

                <div className="cart-totals">
                  <h3>Cart Totals</h3>

                  <ul>
                    <li>
                      Subtotal <span>$150.00</span>
                    </li>
                    <li>
                      Shipping <span>$30.00</span>
                    </li>
                    <li>
                      Total{" "}
                      <span>
                        <b>$180.00</b>
                      </span>
                    </li>
                  </ul>
                  <a href="#" className="btn btn-primary">
                    Proceed to Checkout
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartContent;
