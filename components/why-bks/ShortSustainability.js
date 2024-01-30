import React from "react";
import Link from "next/link";

const ShortSustainability = () => {

    return (
        <>
            <div className="webinar-area" >
                <div className="container">
                    <div className="row m-0  flex-column-reverse flex-lg-row" style={{ padding: "0px 0px 50px 0px" }}>
                        <div className="col-lg-6 p-0" >
                            <img src="/images/Why-bks/sustainability.png" alt="images" className="commonImagepr hospitality" style={{width:"100%"}}/>
                        </div>

                        <div className="col-lg-6 p-0" style={{ display: "flex", alignContent: "center" }}>
                            <div className="webinar-content" >
                                <h2>Sustainability</h2>
                                <p style={{ fontSize: "16px" }}>
                                    BKS Textiles is committed to sustainable development and strives to make a positive impact on our people and the environment. Our talented and dedicated workforce is the driving force behind our success and we invest in their growth and development, providing training programs to enhance their technical and soft skills.
                                </p>
                                <Link href="/sustainability" className="btn btn-primary">
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default ShortSustainability;
