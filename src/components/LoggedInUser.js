import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from "react-router-dom";

class LoggedInUser extends Component {

	render() {
		const user = this.props.user || null;
		// console.log(this.props, user)
		return (
			<Link to="/user-profile">
				<div style={{cursor: 'pointer', zIndex:'100'}} >
	        {
	          user ? 
	            <div style={{ display: "grid",placeItems: 'center', marginRight: '20px'}}>
	              { 
	                user.user && user.user.photo ? 
	                  <img style={{width:"40px", height: '40px', borderRadius:'50%'}} src={user.photo} alt='profile-image' /> 
	                :
	                <div style={{height: "40px", width: "40px", borderRadius:'50%', background: "green", display:"grid", placeItems:"center"}}>
	                  <span style={{color:"#fff"}}>{user.user ? user.user.username.slice(0,1).toUpperCase() : "" }</span>
	                </div>
	              }
							  <p className="user-info" style={{textTransform:'capitalize'}}>{user.user ? user.user.username : ""}</p>
	            </div> 
	          : null
	        }
	      </div>
      </Link>
		);
	}
}

function mapStateToProps(state) {
  return {
    user: state.user.user,
  };
}

export default withRouter(connect(mapStateToProps)(LoggedInUser));

