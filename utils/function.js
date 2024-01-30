import axios from "axios";

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
