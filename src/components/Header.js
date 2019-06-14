import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import LoggedInUser from "./LoggedInUser";

class Header extends Component {

	handleLogout = (e) => {
		window.localStorage.clear();
		this.props.history.push("/login");
	};

	render() {
		const { user } = this.props || null;

		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
			  <Link to="/" className="navbar-brand">
			  	<img className="logo" src="icon.png" alt="logo" />
			  </Link>
			  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			    <span className="navbar-toggler-icon"></span>
			  </button>

			  <div className="collapse navbar-collapse" id="navbarSupportedContent">
			    <ul className="navbar-nav mr-auto">
			    
			      <li className="nav-item">
				      <Link to="/quiz" className="nav-link">Battle ground</Link>
			      </li>
			      <li className="nav-item">
				      <Link to="/leaderBoard" className="nav-link">Dashboard</Link>
				    </li>

			    </ul>
			    {
			    	user.isAuthInProgress ?
						    <form className="form-inline my-2 my-lg-0">
						      <Link to="/login" className="hdr-btn btn btn-outline-success my-2 my-sm-0" type="submit">Login</Link>
						      <Link to="/register" className="hdr-btn btn btn-outline-success my-2 my-sm-0" type="submit">Sign-Up</Link>
						    </form>
						  : 
							<>
								<LoggedInUser/>
							  <a className="hdr-btn btn" href="/" onClick={ this.handleLogout }> Logout </a>
						  </>
					}
			  </div>
			</nav>
		);
	}
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default withRouter(connect(mapStateToProps)(Header));
