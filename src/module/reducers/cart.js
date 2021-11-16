const intialState = {
  loading: false,
  error: null,
  total: 0,
  cartProducts: [],
};

export default function cartReducer(state = intialState, action) {
  console.log(action);
  switch (action.type) {
    case 'GET_CART':
      return {
        ...state,
        cartProducts: action.data,
      };
    case 'CART_LOADING':
      return {...state, loading: action.isLoading};
    case 'UPDATE_CART':
      let products = state.cart.products;
      const index = products.findIndex(
        product => product.productId === action.product.productId,
      );
      if (index !== -1) {
        if (action.product.quantity > 0) products[index] = action.product;
        else products.splice(index, 1);
      } else {
        products.push(action.product);
      }
      return {
        ...state,
        cart: {...state.cart, products},
        total: products.length,
      };
    case 'CART_ERROR':
      return {...intialState, error: action.error};
    default:
      return state;
  }
}
