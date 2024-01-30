import React from 'react'
import Link from 'next/link'

const Hospitality = ({data}) => {
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

export default Hospitality