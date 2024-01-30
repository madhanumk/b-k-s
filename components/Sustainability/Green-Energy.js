import React from 'react'

const GreenEnergy = () => {
    return (
        <>
            <div className="about-area" style={{ padding: "50px 0px", backgroundColor: "rgb(255 244 231)" }}>
                <div className="container">
                    <div className="row " >

                        <div className="col-lg-6 col-md-12 Sustainability" >
                            <div className="about-image">
                                <img src="/images/sustainability/green-energy.png" alt="image" style={{width:"100%"}} className='commonImage hospitality'/>
                                {/* <img src="/images/about/2.jpg" alt="image" /> */}
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="about-content p-0">
                                <h2>Green Energy</h2>
                                <p style={{ fontSize: "16px" }}>
                                At BKS Textiles, we meet our energy requirements with environment-friendly and sustainable alternatives. We use green energy from our windmill farms strategically positioned across state to meet 40% of our power requirements. Our green energy model is mutually beneficial for the environment and the industry, enabling us to curtail carbon emissions and reduce our environmental footprints                                </p>
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

export default GreenEnergy