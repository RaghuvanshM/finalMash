import {createReducer} from 'redux-act';
import {
  authUser,
  signOutUser
} from '../actions';

const initialState = {
  isAuth:true,
  profile: '',
  phonenumber: '',
  currentAddress: '',
  pickupaddress: '',
  dropaddress: '',
  pickuplatlong:0,
  droplatlong:0
};

export const user = createReducer({}, initialState);
user.on(authUser, (state, payload) => {
 console.log(payload)
  return {
    ...state,
    isAuth: payload,
    profile: payload,
  };
});
user.on(signOutUser, state => {

  return {
    ...state,
    isAuth: false,
    profile: '',
  };
});


