import React from "react";

const Milestones = () => {
    return (
        <>
            <div className="about-area widget-area" style={{paddingBottom:"50px "}}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-image">
                                <img src="/images/about/milestone.jpg" alt="image" className="commonImage hospitality" style={{width:"100%"}} />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="about-content p-0 award-content">
                                <div>
                                <h2>Milestones</h2>
                                <div className="widget widget_categories">
                                    <ul style={{  fontSize: "16px", textAlign:"start" }}>
                                        <li style={{fontSize:"16px"}}> 1983 - BKS Mills parent company incorporated</li>
                                        <li style={{fontSize:"16px"}}>2002 - Installed shuttle-less weaving unit</li>
                                        <li style={{fontSize:"16px"}}>2005 - Installed sewing unit</li>
                                        <li style={{fontSize:"16px"}}>2007 - Established coating facility</li>
                                        <li style={{fontSize:"16px"}}>2014 – Modernisation of weaving facility with cutting-edge machinery</li>
                                        <li style={{fontSize:"16px"}}>2015 – Established continuous processing facilities for fabric</li>
                                        <li style={{fontSize:"16px"}}>2016 - Integrated yarn dyeing with a capacity of 8000 kg per day</li>
                                    </ul>
                                </div>
                                </div>
                               
                            </div>
                        </div>


                    </div>
                </div>

                {/* Shape Images */}

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

export default Milestones;
