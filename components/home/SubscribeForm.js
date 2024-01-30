import React from "react";

const SubscribeForm = () => {
  return (
    <>
      <div className="free-trial-area">
        <div className="row m-0">
          <div className="col-lg-6 col-md-12 p-0">
            <div className="free-trial-image">
              <img src="/images/woman2.jpg" alt="image" />
            </div>
          </div>

          <div className="col-lg-6 col-md-12 p-0">
            <div className="free-trial-content">
              <h2>Start your free trial</h2>

              <form className="newsletter-form">
                <input
                  type="email"
                  className="input-newsletter"
                  placeholder="Enter your business email here"
                />
                <button type="submit">Sign Up Free</button>
              </form>

              <p>
                Test out the Machine Learning features for 14 days, no credit
                card required.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubscribeForm;
