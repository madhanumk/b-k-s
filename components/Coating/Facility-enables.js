import React from 'react'

const FacilityEnables = ({data}) => {
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

export default FacilityEnables