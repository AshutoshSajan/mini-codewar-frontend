import React, { Component } from 'react';
import { connect } from 'react-redux';
var url = "http://localhost:8000/api/v1"

class SignUp extends Component {

	state = {
		user: {
			// username: "",
			// password: "",
			// email: "",
			// terms: false,
			// confirmPassword: ""
		}
	}

	handleChange = (e) => {
		const { name, value } = e.target;
		if(name === "terms"){
			this.setState({ 
				user: {
					...this.state.user,
					[name]: !this.state.user[name]
				}
			})
		}else {
			this.setState({
			 user: {
					...this.state.user,
					[name]: value 
				} 
			});
		}
	}

	handleRegister = (e) => {
		e.preventDefault();
		fetch(`${url}/users/register`, {
  		method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state.user),
  	}).then(res => res.json())
  	.then(data => {
  		console.log(data, "login data");
  		if(data.token){
  			localStorage.setItem("jwt", data.token);
  			this.props.dispatch({type: "REGISTER_USER", payload: data });
  			this.setState({ user: {} });
  		}
  	})
	}

	render() {
		return (
			<div className='login'>
				<form onSubmit={this.handleRegister}>
				  <h2>Register</h2>
				  <input onChange={this.handleChange} name='username' placeholder='Username' type='text' value={ this.state.user.username } required/>
				  <input onChange={this.handleChange} id='pw' name='password' placeholder='Password' type='password' value={ this.state.user.password } required/>
				  <input onChange={this.handleChange} id='pw' name='confirmPassword' placeholder='Confirm password' type='password' value={ this.state.user.confirmPassword} required/>
				  <input onChange={this.handleChange} name='email' placeholder='E-Mail Address' type='text' value={ this.state.user.email } required/>
				  <div className='agree'>
				    <input id='agree' name='terms' type='checkbox' checked={ this.state.user.terms } onChange={this.handleChange} required/>
				    <label htmlFor='agree'></label>Accept rules and conditions
				  </div>
				  <input className='animated' type='submit' value='Register'required onClick={this.handleRegister}/>
				  </form>
				  <div className="login-flex">
				  	<a className='forgot' href='#'>Already have an account?</a>
			  		<span className="log-reg-btn">Login</span>
				  </div>
			</div>
		);
	}
}

function mapStateToProps (state) {
	return { state }
}

export default connect(mapStateToProps)(SignUp);
