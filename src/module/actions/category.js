import apolloClient from '../graphql/client';
import { CATEGORY_LIST } from '../graphql/queries';

export const categoryLoading = bool => ({
  type: 'CATEGORY_LOADING',
  isLoading: bool,
});

export const categoryError = error => ({
  type: 'CATEGORY_ERROR',
  error,
});

export const getCategory = (categories) => ({
  type: 'GET_CATEGORIES',
  categories
});

export const getCategories = () => dispatch => {
  return apolloClient.query({
      query: CATEGORY_LIST,
      fetchPolicy: 'no-cache'
    })
    .then((result) => {
      if(result && result.data && result.data.getCategories) dispatch(getCategory(result.data.getCategories));
      dispatch(categoryLoading(false));
    })
    .catch((err) => {
      dispatch(categoryLoading(false));
      dispatch(categoryError(err.message || 'ERROR'));
    })
  /*try {
    const result = await apolloClient.query({
      query: CATEGORY_LIST,
      fetchPolicy: 'no-cache'
    })
    dispatch(categoryLoading(false));
    if(result && result.data && result.data.getCategories) dispatch(getCategory(result.data.getCategories));
  } catch (error) {
    dispatch(categoryLoading(false));
    dispatch(categoryError(err.message || 'ERROR'));
  }*/
}
