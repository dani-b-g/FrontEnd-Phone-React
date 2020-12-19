export const getPhones = () => {
  const baseURL = process.env.REACT_APP_API;
  const url = `${baseURL}/phone`;

  axios
    .get(url)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });
};
