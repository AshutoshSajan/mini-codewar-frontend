import React from "react";
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './Login';

const PrivateRoute = ({ component: Component, auth, user, ...rest }) => {
	console.log(user, "PrivateRoute user...");
	return(
    <div>
      {
        !user.isAuthInProgress ?
          <Route {...rest} render={(props) => (
            auth 
            	? <Component {...props} />
            	: <Redirect to={{ pathname:'/login' }} />
            )} />
        : null
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default withRouter(connect(mapStateToProps)(PrivateRoute));