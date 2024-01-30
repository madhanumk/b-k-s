import React from "react";

const CsrMain = ({data}) => {
    return (
        <>
            <div className="container-fluid">
                <div
                    dangerouslySetInnerHTML={{ __html: data?.content?.rendered }}
                ></div>
            </div>
        </>
    );
};

export default CsrMain;
