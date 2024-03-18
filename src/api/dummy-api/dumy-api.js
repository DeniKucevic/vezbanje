import axios from "axios";

const baseUrl = "https://dummyjson.com/products";

export const getProducs = async () => {
  return await axios.get(`${baseUrl}`);
};
