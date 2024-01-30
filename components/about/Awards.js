import React from "react";

const Awards = () => {


    return (
        <>
            <div className="webinar-area  awards" style={{ backgroundColor: "rgb(255 244 231)" }}>
                <div className="container">
                    <div className="row m-0  flex-column-reverse flex-lg-row" >
                        <div className="col-lg-6 p-0" >
                            <img src="/images/about/Awards.jpg" alt="images" className="commonImage commonImagepr" />
                        </div>

                        <div className="col-lg-6 p-0" style={{ display: "flex", alignItems: "center" }}>
                            <div className="webinar-content awards-content"  >
                                <div>
                                    <h2>Awards</h2>
                                    <p style={{ fontSize: "16px" }}>
                                        Our unparalleled commitment to quality, sustainability, and customer delight are,raising us
                                        to the boundaries of what is possible, driven by our passion for creating top-of-the- textile
                                        solutions.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Awards;
