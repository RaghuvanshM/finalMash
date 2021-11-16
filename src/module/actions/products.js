import axios from 'axios';
import {compose} from 'redux';

export const productLoading = bool => ({
  type: 'PRODUCT_LOADING',
  isLoading: bool,
});

export const productError = error => ({
  type: 'PRODUCT_ERROR',
  error,
});

export const getProduct = data => ({
  type: 'GET_PRODUCTS',
  data,
});

export const clearProducts = () => {
  return {
    type: 'CLEAR_PRODUCTS',
  };
};

export const getProducts = () => dispatch => {
  return axios({
    method: 'GET',
    url: 'http://siyakart.in/api/top-product',
  })
    .then(result => {
      console.log(result);
      if (result && result.data && result.data.status) {
        dispatch(getProduct(result.data.data));
      } else {
        dispatch(productLoading(false));
      }
    })
    .catch(err => {
      console.log(err);
      dispatch(productLoading(false));
      dispatch(productError(err.message || 'ERROR'));
    });
};
