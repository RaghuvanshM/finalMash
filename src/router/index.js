import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import Profile from '../screens/Profile';

import AuthRoute from './AuthRoutes';
import NoAuthRoute from './NoAuthRoutes';
class Router extends Component {
  constructor(props) {
    super(props);
  }
  renderApp = () => {
    let {token} = this.props.AuthStatus;
    return token ? <AuthRoute /> : <NoAuthRoute />;
  };
  render() {
    return this.renderApp();
  }
}
const mapStateToProps = state => ({
  AuthStatus: state.login.user,
});

const mapDispatchToProps = dispatch => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Router);
