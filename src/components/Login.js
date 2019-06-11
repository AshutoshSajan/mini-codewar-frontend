import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
var url = "http://localhost:3000/api/v1";

class Login extends Component {
	
	state ={
    user: {}
  }

  handleChange = (e) => {
		const { name, value } = e.target;
  	this.setState({
		 user: {
				...this.state.user,
				[name]: value 
			} 
		});
  }

  handleLogin = (e) => {
  	console.log("login fn()");
  	e.preventDefault();
  	fetch(`${url}/users/login`, {
  		method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state.user),
  	}).then(res => res.json())
  	.then(data => {
  		console.log(data, "login data");
  		localStorage.setItem("jwt", data.token);
			this.props.dispatch({type: "LOGGED_USER", payload: data });
			this.setState({ user: {} });
  	})
  }

	render() {
		return (
			<div className='login'>
				<form onSubmit={this.handleLogin}>
				  <h2>Login</h2>
					{/*<div className="logo">
						<img src="../../public/icon.png" alt="logo" />
					</div>*/}
				  <input onChange={this.handleChange} name='email' placeholder='E-Mail Address' type='text' value={ this.state.user.email } required/>
				  <input onChange={this.handleChange} id='pw' name='password' placeholder='Password' type='password' value={ this.state.user.password } required/>
				  <button type="button" className="btn btn-info" onClick={this.handleLogin}>Login</button>
				</form>

			  <div className="login-flex">
			  	<p className='forgot'>Don't have an account?</p>
			  	<Link to="/login">Register</Link>
			  </div>
			</div>
		);
	}
}

function mapStateToProps (state) {
	return { state }
}

export default connect(mapStateToProps)(Login);