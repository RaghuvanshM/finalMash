import axios from 'axios';
import {baseUrl} from '../apiconstat';
export const orderLoading = bool => ({
  type: 'ORDER_LOADING',
  isLoading: bool,
});

export const orderError = error => ({
  type: 'ORDER_ERROR',
  error,
});

export const getOrderDetails = data => ({
  type: 'GET_ORDER',
  data,
});

export const clearOrders = () => {
  return {
    type: 'CLEAR_ORDERS',
  };
};

export const getOrders = args => dispatch => {
  dispatch(orderLoading(true));

  return axios({
    method: 'get',
    url: `${baseUrl}get-order`,
  })
    .then(result => {
      if (result && result.data && result.data.status) {
        console.log(result.data.data);
        dispatch(getOrderDetails(result.data.data));
      }
      {
        dispatch(orderLoading(false));
      }
    })
    .catch(err => {
      console.log(err);
      dispatch(orderLoading(false));
      dispatch(orderError(err.message || 'ERROR'));
    });
};
