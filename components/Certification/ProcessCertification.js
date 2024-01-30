import React from "react";

const ProcessCertification = () => {
  return (
    <>
      <div className="partner-area" style={{ backgroundColor: "white", padding: "0px" }}>
        <div className="container">
          <div className="section-title">
            <h2>Process Certifications</h2>
          </div>

          <div className="customers-partner-list" >
            <div className="partner-item" >
              <a href="/images/certification/9001_2015.pdf" target="_blank">
                <img src="/images/certification/process-cert-img1.png" alt="image" /><br/><br/>
                <b style={{fontSize:"18px"}}>ISO 9001:2015</b>
              </a>
            </div>

            <div className="partner-item">
              <a href="/images/certification/14001_2015.pdf" target="_blank">
                <img src="/images/certification/process-cert-img2.png" alt="image" /><br/><br/>
                <b style={{fontSize:"18px"}}>ISO 14001:2015</b>
              </a>
            </div>

            <div className="partner-item">
              <a href="/images/certification/ISO-45001_New.pdf" target="_blank">
                <img src="/images/certification/process-cert-img3.png" alt="image" /><br/><br/>
                <b style={{fontSize:"18px"}}>ISO 45001:2018</b>
              </a>
            </div>

            <div className="partner-item">
              <a href="/images/certification/SA-8000_2014.pdf" target="_blank">
                <img src="/images/certification/process-cert-img4.png" alt="image" />
                <br/><br/>
                <b style={{fontSize:"18px"}}>SA 8000:2015</b>
              </a>
            </div>

            <div className="partner-item">
              <a href="/images/certification/Step_2024.pdf" target="_blank">
                <img src="/images/certification/process-cert-img5.png" alt="image" /><br/><br/>
                <b style={{fontSize:"18px"}}>Step by Oeko-Tex</b>
              </a>
            </div>

            {/* <div className="partner-item">
              <a href="#" target="_blank">
                <img src="/images/partner/6.png" alt="image" />
              </a>
            </div>

            <div className="partner-item">
              <a href="#" target="_blank">
                <img src="/images/partner/7.png" alt="image" />
              </a>
            </div>

            <div className="partner-item">
              <a href="#" target="_blank">
                <img src="/images/partner/8.png" alt="image" />
              </a>
            </div>

            <div className="partner-item">
              <a href="#" target="_blank">
                <img src="/images/partner/9.png" alt="image" />
              </a>
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

export default ProcessCertification;
