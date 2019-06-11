import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import { connect } from 'react-redux';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';

class App extends Component {
  
  render() {
    return (
      <div className="App">
      	<Header />
	      <Switch>
		      {/* <Route exect path="/" component={Home} />*/}
		      <Route exec path="/login" component={Login} />
		      <Route path="/register" component={SignUp} />
	      </Switch>
      </div>
    );
  }
}

function mapStateToProps (state) {
	return { state }
}

export default withRouter(connect(mapStateToProps)(App));
