const initState = {
  pricing: {},
  itemDetail: {},
  discount: 1,
  loading: false,
  promo: "DISCOUNT"
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true };
    case "GETDATA":
      return {
        ...state,
        pricing: action.data.pricing,
        itemDetails: action.data.itemDetails,
        loading: false
      };
    case "DISCOUNT":
      return { ...state, discount: action.num };
    default:
      return state;
  }
};

export default reducer;
