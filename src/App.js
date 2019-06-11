import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import SignUp from './components/SignUp';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Header />
        {<Login />}
        {/*<SignUp />*/}
      </div>
    );
  }
}

export default App;
