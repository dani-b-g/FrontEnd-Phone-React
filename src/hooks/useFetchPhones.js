import { useEffect, useState } from "react";
import { getPhones } from "../helpers/get";

export const useFetchPhones = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getPhones(category).then((phones) => {
      setState({
        data: phones,
        loading: false,
      });
    });
  }, [category]);

  return state;
};
