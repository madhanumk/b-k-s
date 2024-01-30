import React from 'react'

const Production = () => {
    return (
        <>
            <div className="about-area   widget-area" style={{ padding: "50px 0px", backgroundColor: "rgb(255 255 255)" }}>
                <div className="container">
                    <div className="row" >

                        <div className="col-lg-6 col-md-12" >
                            <div className="about-image">
                                <img src="/images/processing/processing-capacity.png" alt="image" className='commonImagepr hospitality' style={{width:"100%"}}/>
                                {/* <img src="/images/about/2.jpg" alt="image" /> */}
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="about-content p-0">
                                <div className="widget widget_categories about-content p-0">
                                    <h2>Production Capacity</h2>
                                    <ul style={{textAlign:"start", fontSize:"18px"}}>
                                        <li  style={{fontSize:"18px"}}><span style={{ fontWeight: "bold" }}>Continuous bleaching range :</span> 65,000 metres/day</li>
                                        <li style={{fontSize:"18px"}}><span style={{ fontWeight: "bold" }}>Continuous dyeing range :</span> 35,000 metres/day</li>
                                        <li style={{fontSize:"18px"}}><span style={{ fontWeight: "bold" }}>Soft flow bleaching and dyeing :</span> 16,000 metres/day</li>
                                        <li style={{fontSize:"18px"}}><span style={{ fontWeight: "bold" }}>Jigger dyeing :</span> 20,000 metres/day</li>
                                        <li style={{fontSize:"18px"}}><span style={{ fontWeight: "bold" }}>Sanforizing :</span> 55,000 metres/day</li>
                                        <li style={{fontSize:"18px"}}><span style={{ fontWeight: "bold" }}>Calendaring :</span> 70,000 metres/day</li>
                                        <li style={{fontSize:"18px"}}><span style={{ fontWeight: "bold" }}>Peaching :</span> 40,000 metres/day</li>
                                    </ul>
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

export default Production