import React from 'react'
import Link from 'next/link'

const Apparel = () => {
    return (
        <>
            <div className="about-area" style={{ padding: "50px 0px", backgroundColor: "rgb(255 244 231)" }}>
                <div className="container">
                    <div className="row" >

                        <div className="col-lg-6 col-md-12">
                            <div className="about-image">
                                <img src="/images/products/apparel-img.png" alt="image" className='commonImage commonImagepr hospitality' style={{width:"100%"}} />
                                {/* <img src="/images/about/2.jpg" alt="image" /> */}
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="about-content p-0">
                                <div className="widget widget_categories about-content p-0">
                                    <h2>Apparel Fabrics</h2>
                                    <p style={{ fontSize: "16px" }}>
                                        Our diverse range of woven fabrics includes 100% Cotton, Organic Cotton, Fairtrade Organic
                                        Cotton, Cotton Polyester, Polyester, Viscose, Modal, Tencel, Linen and Bamboo. With a
                                        GSM range of 50-500, we can weave Percale, Plain Satin, Stripe Satin, Damask, Twill, Dobby,
                                        Jacquard, and more.
                                    </p>
                                    <Link href="/apparel-fabrics" className="btn btn-primary">
                                        Read More
                                    </Link>
                                </div>
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
    )
}

export default Apparel