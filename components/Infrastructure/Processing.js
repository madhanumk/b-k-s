import React from 'react'
import Link from 'next/link'

const Processing = () => {
    return (
        <>
            <div className="about-area" style={{ padding: "50px 0px" }}>
                <div className="container">
                    <div className="row align-items-center  flex-column-reverse flex-lg-row">
                        <div className="col-lg-6 col-md-12 workwear-content">
                            <div className="about-content p-0" id="infra-processing">
                                <h2>Processing</h2>
                                <p style={{ fontSize: "16px" }}>
                                    The BKS processing facility located in SIPCOT Perundurai Erode houses cutting-edge
                                    machinery, including a Continuous Bleaching Range (CBR), Continuous Dyeing Range (CDR),
                                    and Rotary printing machines, to ensure your fabrics are finished to perfection. We can
                                    expertly handle greige fabrics up to 78 & and finish up to 72 & and offer a range of processing
                                    possibilities on 100% cotton, polycotton, 100% polyester, viscose, poly-viscose, linen,
                                    tencel, modal, and blended fabrics.                                </p>
                                <Link href="/processing" className="btn btn-primary">
                                    Read More
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="about-image">
                                <img src="/images/infrastructure/processing.png" alt="image" style={{width:"100%"}}/>
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

export default Processing