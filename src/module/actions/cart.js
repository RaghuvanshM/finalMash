import axios from 'axios';
export const cartLoading = bool => ({
  type: 'CART_LOADING',
  isLoading: bool,
});

export const cartError = error => ({
  type: 'CART_ERROR',
  error,
});

export const getCartDetails = data => ({
  type: 'GET_CART',
  data,
});

export const updateCart = product => ({
  type: 'UPDATE_CART',
  product,
});

// export const getCart = userId => dispatch => {
//   dispatch(cartLoading(true));
//   const data = {};
//   if (userId) data['userId'] = userId;
//   return apolloClient
//     .query({
//       query: CART_LIST,
//       variables: {
//         ...data,
//       },
//       fetchPolicy: 'no-cache',
//     })
//     .then(result => {
//       if (result && result.data && result.data.getCartDetails)
//         dispatch(getCartDetails(result.data.getCartDetails));
//       dispatch(cartLoading(false));
//     })
//     .catch(err => {
//       dispatch(cartLoading(false));
//       dispatch(cartError(err.message || 'ERROR'));
//     });
// };

export const getCart = userId => async dispatch => {
  console.log('jdkjfkaj');
  dispatch(cartLoading(true));
  try {
    axios({
      method: 'GET',
      url: `http://siyakart.in/api/cart-list/${userId}`,
    }).then(res => {
      if (res.data?.data) {
        console.log(res.data.data);
        dispatch(getCartDetails(res.data?.data));
      }
    });
  } catch (e) {
    console.log(e);
  }
};
