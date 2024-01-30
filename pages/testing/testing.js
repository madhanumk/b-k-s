import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const Testing = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://file.bkstextiles.in/wp-json/wp/v2/pages/?slug=about-us`)
      .then((res) => {
        setData(res?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      {data?.map((value) => {
        console.log(value);
        return (
          <>
            <div className="page-title">
              <h6>
                <Link href={`/${value.slug}`} style={{ color: "black" }}>
                  {value?.title?.rendered}
                </Link>
              </h6>
              <div  dangerouslySetInnerHTML={{ __html: value.content.rendered }}></div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Testing;
