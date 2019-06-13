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
const axios = require('axios');

class App extends Component {
  componentDidMount() {
    const { jwt } = localStorage;
    setAuthToken( jwt );
    axios.get('/users/verify-token')
    .then((res) => {
      console.log(res, "data");
      if(res.data.success){
        this.props.dispatch({ type: "REGISTER_USER", payload: res.data });
        this.setState({ user: {} });
        // this.props.history.push('/');
      }
    })
    .catch(function (error) {
      console.log(error, "catch error");
    });
  }
  
  render() {
    const auth = this.props.state.user.isAuthInProgress;
    return (
      <div className="App">
      	<Header />
        <Switch>
		      <Route exact path="/" component={Home} />
		      <Route path="/register" component={SignUp} />
          <Route path="/leaderBoard" component={LeaderBoard} />
          <Route path="/quiz" component={QuizBoard} />
          // <PrivateRoute path='/leaderBoard' auth={auth} component={LeaderBoard} />
          // <PrivateRoute path='/quiz' auth={auth} component={QuizBoard} />
		      <Route path="/login" component={Login} />
	      </Switch>
      </div>
    );
  }
}

function mapStateToProps (state) {
	return { state }
}

export default withRouter(connect(mapStateToProps)(App));
