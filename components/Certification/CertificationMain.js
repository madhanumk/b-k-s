import React from 'react'

const CertificationMain = ({data}) => {
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

export default CertificationMain