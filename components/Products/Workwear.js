import React from 'react'
import Link from 'next/link'

const Workwear = () => {
    return (
        <>
            <div className="about-area" style={{ padding: "50px 0px" }}>
                <div className="container">
                    <div className="row align-items-center  flex-column-reverse flex-lg-row">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-content p-0 workwear-content">
                                <h2>Workwear</h2>
                                <p style={{ fontSize: "16px" }}>
                                    We produce a wide range of functional and stylish workwear of high quality that
                                    guarantees durability and comfort. From industrial settings to corporate environments, our
                                    workwear collections are designed to meet the unique needs of professionals across
                                    sectors and meet the demanding conditions of work environments.
                                </p>
                                <Link href="/workwear" className="btn btn-primary">
                                    Read More
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="about-image">
                                <img src="/images/products/workwear.png" alt="image" className='hospitality' style={{width:"100%"}}/>
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

export default Workwear