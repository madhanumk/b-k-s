import React from "react";
import Link from "next/link";

const YarnQuality = () => {

    return (
        <>
            <div className="webinar-area" style={{ backgroundColor: "rgb(255 244 231)" }}>
                <div className="container">
                <div className="row m-0  flex-column-reverse flex-lg-row" style={{padding:"50px 0px"}}>
                    <div className="col-lg-6 p-0" >
                        <img src="/images/Why-bks/yarn-quality.png" alt="images" className="commonImagepr " style={{width:"100%"}}/>
                    </div>

                    <div className="col-lg-6 p-0" style={{ display: "flex", alignContent: "center" }}>
                        <div className="webinar-content" >
                            <h2>Yarn Quality</h2>
                            <p style={{ fontSize: "16px", fontWeight: "bold" }}>
                                We believe in producing the finest quality textile products with threads that imbibe elegance in every fabric.
                            </p>
                            <p style={{fontSize:"16px"}}>
                            At BKS Textiles,we explore the strength of Indian spinning in sourcing the finest Cotton, Polycotton, Polyester, Linen and Viscose yarns in various counts ranging from 4’s to 100’s, from modern spinning mills & across globe.
                            </p>
                            <p style={{fontSize:"16px"}}>
                            To make sure we provide only the best textile solutions our quality assurance team rigorously tests the yarn for various quality parameters like including uster classimat faults, We take quality of raw materials  to ensure the process & product performance that,best matches with the industry standards. 
                            </p>
                           
                        </div>
                    </div>
                </div>
                </div>
                
            </div>
        </>
    );
};

export default YarnQuality;
