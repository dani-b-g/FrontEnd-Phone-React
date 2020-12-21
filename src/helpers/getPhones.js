import axios from "axios";

export const getPhones = () => {
  const baseURL = process.env.REACT_APP_API_URL;
  const url = `${baseURL}/phone`;

  return axios.get(url, {
    crossDomain: true,
    // headers: {
    //   "Access-Control-Allow-Origin": "*",
    // },
  });
};
