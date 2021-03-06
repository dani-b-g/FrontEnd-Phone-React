import axios from "axios";

// Get all phones in DDBB
export const getPhones = () => {
  const baseURL = process.env.REACT_APP_API_URL;
  const url = `${baseURL}/phone`;

  return axios.get(url, {
    crossDomain: true,
  });
};
