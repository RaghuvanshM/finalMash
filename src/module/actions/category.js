import axios from 'axios';

export const categoryLoading = bool => ({
  type: 'CATEGORY_LOADING',
  isLoading: bool,
});

export const categoryError = error => ({
  type: 'CATEGORY_ERROR',
  error,
});

export const getCategory = categories => ({
  type: 'GET_CATEGORIES',
  categories,
});

export const getCategories = () => dispatch => {
  return axios({
    method: 'GET',
    url: 'http://siyakart.in/api/top-category',
  })
    .then(result => {
      if (result && result.data && result.status) {
        dispatch(getCategory(result.data.data));
      } else {
        dispatch(categoryLoading(false));
      }
    })
    .catch(err => {
      dispatch(categoryLoading(false));
      dispatch(categoryError(err.message || 'ERROR'));
    });
};
