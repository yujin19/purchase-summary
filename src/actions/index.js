import { getPricingData } from "../mockserver";

const loading = () => {
  return {
    type: "LOADING"
  };
};

const getData = data => {
  return {
    type: "GETDATA",
    data
  };
};

export const fetchData = () => {
  return dispatch => {
    dispatch(loading());
    getPricingData().then(data => {
      dispatch(getData(data));
    });
  };
};

export const applyPromoCode = num => {
  return {
    type: "DISCOUNT",
    num
  };
};
