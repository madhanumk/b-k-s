import React from 'react'

const QualityMain = ({data}) => {
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

export default QualityMain