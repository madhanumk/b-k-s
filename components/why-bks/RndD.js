import React from "react";
import Link from "next/link";

const RndD = () => {

    return (
        <>
            <div className="webinar-area" style={{ backgroundColor: "rgb(255 244 231)" }}>
                <div className="container">
                    <div className="row m-0  flex-column-reverse flex-lg-row" style={{ padding: "50px 0px 50px 0px" }}>
                        <div className="col-lg-6 p-0" >
                            <img src="/images/Why-bks/r&d.png" alt="images" className="commonImagepr hospitality" style={{width:"100%"}}/>
                        </div>

                        <div className="col-lg-6 p-0" style={{ display: "flex", alignContent: "center" }}>
                            <div className="webinar-content" >
                                <h2>R & D</h2>
                                <p style={{ fontSize: "16px" }}>
                                    Our passionate R&D team is steered and guided by our Director, who constantly inspires us to explore the latest trends in fashion and technology. Our talented and dedicated R&D team is always on the lookout of products from research & developments in fibre science, spinning, weaving, and processing technologies as well as chemical re-engineering techniques that can help us to meet the diverse requirements of our high-end customers.                             </p>
                                <Link href="/research-develeopment" className="btn btn-primary">
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

export default RndD;
