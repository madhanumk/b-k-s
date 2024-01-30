import React from "react";

const ProductCertification = () => {
  return (
    <>
      <div className="partner-area" style={{ backgroundColor: "white", padding: "50px 0px" }}>
        <div className="container">
          <div className="section-title">
            <h2> Product Certifications</h2>
          </div>
            <div className="customers-partner-list" >
              <div className="partner-item" >
                <a href="/images/certification/GOTS_CERTIFICATE_2024.pdf" target="_blank" rel="noopener noreferrer">
                  <img src="/images/certification/product-cert-img1.png" alt="image" />
                  <br/><br/>
                <b style={{fontSize:"18px"}}>GOTS</b>
                </a>
              </div>

              <div className="partner-item">
                <a href="/images/certification/GRS_CERTIFICATE_2024.pdf" target="_blank">
                  <img src="/images/certification/product-cert-img2.png" alt="image" />
                  <br/><br/>
                <b style={{fontSize:"18px"}}>GRS</b>
                </a>
              </div>

              <div className="partner-item">
                <a href="/images/certification/Fairtrade_2024.pdf" target="_blank">
                  <img src="/images/certification/product-cert-img3.png" alt="image" />
                  <br/><br/>
                <b style={{fontSize:"18px"}}>Fairtrade</b>
                </a>
              </div>

              <div className="partner-item">
                <a href="/images/certification/Oekotex_Madeups_2024.pdf" target="_blank">
                  <img src="/images/certification/product-cert-img4.png" alt="image" />
                  <br/><br/>
                <b style={{fontSize:"18px"}}>Oeko-Tex</b>
                </a>
              </div>
              <div className="partner-item">
                <a href="/images/certification/GCL-COC-500021.pdf" target="_blank">
                  <img src="/images/certification/product-cert-img5.png" alt="image" />
                  <br/><br/>
                <b style={{fontSize:"18px"}}>GCL-COC-500021</b>
                </a>
              </div>


          
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

export default ProductCertification;
