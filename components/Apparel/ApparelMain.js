import React from 'react'

const ApparelMain = ({data}) => {
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

export default ApparelMain