import { useEffect, useState } from "react";
import { getPhones } from "../helpers/getPhones";

export const UseFetchPhones = () => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getPhones().then(({ data }) => {
      setState({
        data: data,
        loading: false,
      });
    });
  }, []);

  return state;
};
