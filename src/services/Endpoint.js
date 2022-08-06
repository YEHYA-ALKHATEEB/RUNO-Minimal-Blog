import axios from "axios";

export default () => {
  // create axios instance
  const instance = axios.create({
    baseURL: "http://fakestoreapi.com/",
  });

  // return instance
  return instance;
};
