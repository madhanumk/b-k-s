import React from "react";
import Link from "next/link";

const ErrorPage = () => {
  return (
    <>
      <div className="error-area">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="error-content">
                <img src="/images/404.png" alt="error" />
                <h3>Oops! Page Not Found</h3>
                <p>The page you were looking for could not be found</p>
                <Link href="/" className="btn btn-primary">
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
