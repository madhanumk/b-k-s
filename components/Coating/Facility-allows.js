import React from 'react'

const FacilityAllows = () => {
    return (
        <>
            <div className="about-area  widget-area facility" >
                <div className="container">
                    <div className="row flex-column-reverse flex-lg-row" >

                        <div className="col-lg-6 col-md-12 workwear-content" >
                            <div className="about-content p-0">
                                <div className="widget widget_categories about-content p-0">
                                    <h2>Our modern facility allows us to deliver the following fabric finishes</h2>
                                    <ul>
                                        <div style={{display:"flex", justifyContent:"space-between"}}>
                                            <div  style={{textAlign:"start"}}>
                                                <li style={{fontSize:"18px"}}>Water Repellent</li>
                                                <li style={{fontSize:"18px"}} >Wrinkle Free</li>
                                                <li style={{fontSize:"18px"}}>Aroma / Fragrance</li>
                                                <li style={{fontSize:"18px"}}>Wicking</li>
                                                <li style={{fontSize:"18px"}}>UV Protective</li>
                                                <li style={{fontSize:"18px"}}>Anti-fungal and Anti-bacterial</li>
                                            </div>

                                            <div style={{textAlign:"start"}}>
                                                <li style={{fontSize:"18px"}}>Teflon</li>
                                                <li style={{fontSize:"18px"}}>Stain-free / Scotch guard</li>
                                                <li style={{fontSize:"18px"}}>Mosquito Repellent</li>
                                                <li style={{fontSize:"18px"}}>Flame retardant</li>
                                                <li style={{fontSize:"18px"}}>Airo finish</li>
                                            </div>
                                            <div>
                                                
                                            </div>
                                        </div>


                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="about-image">
                                <img src="/images/coating/img-2.png" alt="image" style={{width:"100%"}} />
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
    )
}

export default FacilityAllows