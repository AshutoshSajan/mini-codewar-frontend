import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';
import LeaderBoard from './components/LeaderBoard';
import QuizBoard from './components/QuizBoard';
import PrivateRoute from './components/PrivateRoute';
import setAuthToken from './utils/setAuthToken';
// import UserProfile from './components/UserProfile';
const axios = require('axios');

class App extends Component {
  
  componentDidMount() {
    const { jwt } = localStorage;
    setAuthToken(jwt)
    axios.post('/users/verify')
    .then((res) => {
      console.log(res, "data");
      if(res.data.success){
        this.props.dispatch({ type: "REGISTER_USER", payload: res.data });
        this.props.history.push('/');
      }
    })
    .catch(function (error) {
      console.log(error, "catch error");
    });
  }
  
  render() {
    const auth = this.props.state.user.isAuthInProgress || null;

    return (
      <div className="App">
      	<Header />
        {/*<UserProfile />*/}
        <Switch>
		      <Route exact path="/" component={Home} />
		      <Route path="/register" component={SignUp} />
          <Route path="/login" component={Login} />
          {
            <>
              <Route path="/leaderBoard" component={LeaderBoard} />
              <Route path="/quiz" component={QuizBoard} />
            </>
          }
          {
            // <PrivateRoute path='/leaderBoard' auth={auth} component={LeaderBoard} />
            // <PrivateRoute path='/quiz' auth={auth} component={QuizBoard} />
          }
	      </Switch>
      </div>
    );
  }
}

function mapStateToProps (state) {
	return { state }
}

export default withRouter(connect(mapStateToProps)(App));
