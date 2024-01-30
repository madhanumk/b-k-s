import React from "react";

const Partner = () => {
  return (
    <>
      <div className="partner-area" style={{ backgroundColor: "white", padding: "80px" }}>
        <div className="container">
          <div className="section-title">
            <h2>Certifications</h2>
            <p style={{ fontSize: "16px" }}>
              We are accredited with the following certifications for our adherence to quality norms to
              offer sustainable solutions across our supply chain.
            </p>
          </div>

          <div className="customers-partner-list" >
            <div className="partner-item1" >
             
                <img src="/images/certification/cert-1.png" alt="image" />
             
            </div>

            <div className="partner-item1">
           
            <img src="/images/certification/cert-2.png" alt="image" />
            
            </div>

            <div className="partner-item1">
          
            <img src="/images/certification/cert-3.png" alt="image" />
            
            </div>
            <div className="partner-item1">
            <img src="/images/certification/cert-7.png" alt="image" />
            </div>
                          
            <div className="partner-item1">
            <img src="/images/certification/cert-5.png" alt="image" />
            </div>

            {/* <div className="partner-item1">
            <img src="/images/certification/cert-6.png" alt="image" />
            </div> */}
           
          
          </div>
        </div>

        {/* shape images */}
        <div className="shape-img2">
          <img src="/images/shape/4.png" alt="image" />
        </div>
        <div className="shape-img3">
          <img src="/images/shape/5.png" alt="image" />
        </div>
        <div className="shape-img7">
          <img src="/images/shape/5.png" alt="image" />
        </div>
        <div className="dot-shape1">
          <img src="/images/shape/4.png" alt="image" />
        </div>

        {/* <div className="dot-shape6">
          <img src="/images/shape/4.png" alt="image" />
        </div> */}
      </div>
    </>
  );
};

export default Partner;
