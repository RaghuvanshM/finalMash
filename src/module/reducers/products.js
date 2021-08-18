const initialState = {
  products: [],
  loading: false,
  error: null,
  total: 1
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return { ...state, products: [...state.products, ...action.data.products], total: action.data.totalProduct };
    case 'PRODUCT_LOADING':
      return { ...state, loading: action.isLoading };
    case 'PRODUCT_ERROR':
      return { ...state, error: action.error };
    case 'CLEAR_PRODUCTS':
      return { ...initialState }
    default:
      return state;
  }
};
