import { useEffect, useState } from "react";
import { getPhones } from "../helpers/getPhones";
import { getPhonesDetails } from "../helpers/getPhonesDetails";

export const UseFetchPhones = (id) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  //if have id get details of a phone
  useEffect(() => {
    if (!id) {
      getPhones().then(({ data }) => {
        setState({
          data: data,
          loading: false,
        });
      });
    } else {
      getPhonesDetails(id).then(({ data }) => {
        setState({
          data: { data },
          loading: false,
        });
      });
    }
  }, [id]);
  return state;
};
