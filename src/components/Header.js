import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import { connect } from 'react-redux';

class Header extends Component {

	handleLogout = () => {
		window.localStorage.clear();
		this.props.history.push("/login");
	};

	render() {
		// console.log(this.props.user);
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
			      {
				      /*<li className="nav-item active">
					      <Link to="/" className="nav-link">Home</Link>
				      </li>*/
			    	}
			      <li className="nav-item">
				      <Link to="/quiz" className="nav-link">Battle ground</Link>
			      </li>
			      <li className="nav-item">
				      <Link to="/leaderBoard" className="nav-link">Dashboard</Link>
				    </li>

			      {/*<li className="nav-item dropdown">
			        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
			          Dropdown
			        </a>
			        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
			          <a className="dropdown-item" href="#">Action</a>
			          <a className="dropdown-item" href="#">Another action</a>
			          <div className="dropdown-divider"></div>
			          <a className="dropdown-item" href="#">Something else here</a>
			        </div>
			      </li>
			      <li className="nav-item">
			        <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
			      </li>*/}
			    </ul>
			    {
			    	user.isAuthInProgress ?
						    <form className="form-inline my-2 my-lg-0">
						      <Link to="/login" className="hdr-btn btn btn-outline-success my-2 my-sm-0" type="submit">Login</Link>
						      <Link to="/register" className="hdr-btn btn btn-outline-success my-2 my-sm-0" type="submit">Sign-Up</Link>
						      {
						      	// <div>
							      // 	<img src="" alt="profile pic"/>
							      // 	<div>img circle</div>
							      // 	<p>username</p>
						      	// </div>
						    	}
						    </form>
						  : 
						  <Link className="hdr-btn btn" type="submit" onClick={ this.handleLogout }> Logout </Link>
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
