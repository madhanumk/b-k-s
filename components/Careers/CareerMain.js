import React from 'react'

const CareerMain = ({data}) => {
    return (
        <>
            <div className="container-fluid">
                <div
                    dangerouslySetInnerHTML={{ __html: data?.content?.rendered }}
                ></div>
            </div>

        </>
    )
}

export default CareerMain