import React from "react";
import Link from "next/link";


const QualityPractice = () => {
    return (
        <>
            <div className="about-area" style={{ padding: "50px 0px" }}>
                <div className="container">
                    <div className="row align-items-center  flex-column-reverse flex-lg-row">
                        <div className="col-lg-6 col-md-12 workwear-content">
                            <div className="about-content p-0">
                                <div>
                                    <h2>Quality Practices </h2>
                                    <p style={{ fontSize: "16px" }}>
                                        At BKS Textiles, we embrace the latest technology to meet the challenges of the evolving textile landscape and ensure our activities, processes and systems comply with quality management systems and customer requirements. We strive for continual improvements and continuously review, assess and revamp our systems and processes and measure our performance to ensure compliance with our quality policy.
                                    </p>
                                    <Link href="/quality-practices" className="btn btn-primary">
                                        Read More
                                    </Link>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="about-image">
                                <img src="/images/Why-bks/quality.png" alt="image" style={{ width: "100%" }} />
                                {/* <img src="/images/about/2.jpg" alt="image" /> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="shape-img2">
                    <img src="/images/shape/3.png" alt="image" />
                </div>
                <div className="shape-img3">
                    <img src="/images/shape/3.png" alt="image" />
                </div>
                <div className="shape-img4">
                    <img src="/images/shape/4.png" alt="image" />
                </div>
                <div className="shape-img5">
                    <img src="/images/shape/5.png" alt="image" />
                </div>
                <div className="shape-img6">
                    <img src="/images/shape/6.png" alt="image" />
                </div>
                <div className="dot-shape1">
                    <img src="/images/shape/4.png" alt="image" />
                </div>

            </div>
        </>
    );
};

export default QualityPractice;
