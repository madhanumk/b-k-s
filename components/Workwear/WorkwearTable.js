import React from 'react'

const WorkwearTable = () => {
    return (
        <>
            <div className="about-area" style={{ padding: "0px 0px 50px 0px", }}>
                <div className="container">
                    <div className="cart-table table-responsive">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col"  style={{fontSize:"18px"}}>Workwear Collections</th>
                                    <th scope="col" style={{fontSize:"18px"}}></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{fontSize:"16px"}}>Hotels</td>
                                    <td style={{fontSize:"16px"}}>Chef Coat, Apron, Waiter/ Waitress Uniform</td>
                                </tr>
                                <tr>

                                    <td style={{fontSize:"16px"}}>Hospitals</td>
                                    <td style={{fontSize:"16px"}}>Doctor&#39;s Coat, Nurse uniform</td>
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

export default WorkwearTable