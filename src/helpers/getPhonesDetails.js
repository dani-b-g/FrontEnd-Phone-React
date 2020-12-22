import axios from "axios";

// Check phone data with id
export const getPhonesDetails = (id) => {
  const baseURL = process.env.REACT_APP_API_URL;
  const url = `${baseURL}/phone/${id}`;

  return axios.get(url, {
    crossDomain: true,
  });
};
