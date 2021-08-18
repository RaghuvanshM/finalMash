import { setData } from '../utils/storage';

export const loginRequest = bool => ({
  type: 'LOGIN_REQUEST',
  isFetching: bool
});

export const loginSuccess = (user) => {
  return {
    type: 'LOGIN_SUCCESS',
    user
  }
};

export const loginError = (error) => ({
  type: 'LOGIN_ERROR',
  error
});

export const setToken = (token) => {
  console.log(token,'loginaction')
  return {
    type: 'SET_TOKEN',
    token
  }
}

// export const login = (credentials) => dispatch => {
//   dispatch(loginRequest(true));
//   return apolloClient.query({
//       query: VERIFY_CODE,
//       variables: {
//         ...credentials
//       },
//       fetchPolicy: 'no-cache'
//     })
//     .then(async (result) => {
//       if(result && result.data && result.data.verifyCode) {
//         await setData('token', result.data.verifyCode.token)
//         dispatch(loginSuccess(result.data.verifyCode));
//       }
//       dispatch(loginRequest(false));
//       return result
//     })
//     .catch((err) => {
//       dispatch(loginRequest(false));
//       dispatch(loginError(err.message || 'ERROR'));
//       return err
//     })
// }
