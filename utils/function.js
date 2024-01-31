import axios from "axios";

export const gallery = async () => {
  try {
    const res = await axios.get(
      "https://file.bkstextiles.in/wp-json/wp/v2/pages/"
    );
    return res.data[0]
  } catch (error) {
    console.log("hospitalerror: ", error);
  }
};

export const singleSlugData = async (slug) => {
  try {
    const res = await axios.get(
      `https://file.bkstextiles.in/wp-json/wp/v2/pages/?slug=${slug}`
    );
    return res.data
  } catch (error) {
    console.log("error: ", error);
  }
};



export const parseImageUrls = (data) => {
  const datats = data?.content?.rendered;
  const regex = /<img.*?src=['"](.*?)['"].*?>/g;
  const matches = datats?.match(regex);
  let url;
  if (matches) {
    const urls = matches.map((match) => match.match(/src=['"](.*?)['"]/)[1]);
    url = urls;
  } else {
    url = [];
  }

  return url;
};