import React from 'react'

const HospitalityTable = () => {
    return (
        <>
            <div className="about-area " style={{ padding: "50px 0px 50px 0px", }}>
                <div className="container">
                    <div className="cart-table table-responsive">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col"  style={{fontSize:"18px"}}>Hospitality Linen</th>
                                    <th scope="col" style={{fontSize:"18px"}}>In various GSM variants</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{fontSize:"16px"}}>Bed Linen</td>
                                    <td style={{fontSize:"16px"}}>Fitted Sheet, Flat Sheet, Duvet Cover, Pillowcase, Pillow protector, Shams, Cushion Covers</td>
                                </tr>
                                <tr>

                                    <td style={{fontSize:"16px"}}>Table Linen</td>
                                    <td style={{fontSize:"16px"}}>Table Cloth, Runner, Napkin, Placemat, Coaster</td>
                                </tr>
                                <tr>
                                    <td style={{fontSize:"16px"}}>Bath Linen</td>
                                    <td style={{fontSize:"16px"}}>Bath Towel, Bath robe, Face Towel, Hand towel, Pool Towel</td>
                                </tr>
                                <tr>
                                    <td style={{fontSize:"16px"}}>Spa &amp; Resort Linen</td>
                                    <td style={{fontSize:"16px"}}>Towel Set, Spa Bags, Sheet, Robe</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

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

export default HospitalityTable