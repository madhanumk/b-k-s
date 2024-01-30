import React from 'react'
import Link from 'next/link'

const Coating = () => {
    return (
        <>
            <div className="about-area" style={{ padding: "50px 0px" }}>
                <div className="container">
                    <div className="row align-items-center  flex-column-reverse flex-lg-row">
                        <div className="col-lg-6 col-md-12 workwear-content">
                            <div className="about-content p-0" id="infra-coating">
                                <h2>Coating</h2>
                                <p style={{ fontSize: "16px" }}>
                                    Our latest addition to our manufacturing process allows us to produce the best coated
                                    technical textiles, with the perfect blend of style and functionality. Our coating division is
                                    equipped with advanced machinery that can handle woven fabrics up to 70 & (178 cm) wide
                                    and has a production capacity of an impressive 20,000 metres per day.                                </p>
                                <Link href="/coating" className="btn btn-primary">
                                    Read More
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="about-image">
                                <img src="/images/infrastructure/coating.png" alt="image" style={{width:"100%"}}/>
                                {/* <img src="/images/about/2.jpg" alt="image" /> */}
                            </div>
                        </div>
                    </div>

                </div>

                <div className="shape-img2">
                    <img src="/images/shape/1.png" alt="image" />
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
    )
}

export default Coating