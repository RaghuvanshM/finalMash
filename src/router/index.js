import React from 'react';
import { useSelector } from 'react-redux';
import { getIsUserAuth } from '../module/selectors';
import AuthRoute from './AuthRoutes';
import NoAuthRoute from './NoAuthRoutes';
const Router =()=>{
  const isAuth = useSelector(getIsUserAuth);
 console.log(isAuth)
return isAuth ?<NoAuthRoute/>:<AuthRoute />
}
export default Router;
