const initialState = {
  productsdetails: [],
};

export default function productdetailsReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_PRODUCT_DETAILS':
      console.log(action);
      return {
        ...state,
        productsdetails: action.data,
      };
    default:
      return state;
  }
}
