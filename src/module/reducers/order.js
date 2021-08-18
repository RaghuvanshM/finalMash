const initialState = {
  orders: [],
  loading: false,
  error: null,
  totalOrder: 1
};

export default function orderReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_ORDER':
      return { ...state, orders: [...state.orders, ...action.data.orders], totalOrder: action.data.totalOrder };
    case 'ORDER_LOADING':
      return { ...state, loading: action.isLoading };
    case 'ORDER_ERROR':
      return { ...state, error: action.error };
    case 'CLEAR_ORDERS':
      return { ...initialState }
    default:
      return state;
  }
};
