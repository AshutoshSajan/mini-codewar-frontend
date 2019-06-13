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
    console.log(jwt, "cdm app...")
    if(jwt){
      setAuthToken(jwt)
      axios.post('/users/login', {
        email: "qwerty111@gmail.com",
        password: "123456"
      })
      .then((res) => {
        console.log(res, "data");
        if(res.data.success){
          this.props.dispatch({ type: "REGISTER_USER", payload: res.data });
          this.props.history.push('/');
        }
      })
      .catch(function (error) {
        console.error(error, "catch error");
      });
    } else this.props.history.push('/login');
  }
  
  render() {
    const auth = this.props.state.user.isAuthenticated;
    console.log(auth,"//././.")

    return (
      <div className="App">
      	<Header />
        <Switch>
		      <Route exact path="/" component={Home} />
		      <Route path="/register" component={SignUp} />
          <Route path="/login" component={Login} />
          {
            // <>
            //   <Route path="/leaderBoard" component={LeaderBoard} />
            //   <Route path="/quiz" component={QuizBoard} />
            // </>
          }
          {
            <>
            <PrivateRoute path='/leaderBoard' auth={auth} component={LeaderBoard} />
            <PrivateRoute path='/quiz' auth={auth} component={QuizBoard} />
            </>
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
