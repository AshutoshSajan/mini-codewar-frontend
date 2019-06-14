import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import setAuthToken from '../utils/setAuthToken';
const axios = require('axios');

class UserProfile extends React.Component{ 
  constructor(props){
    super(props);
    console.log(this.props.user.user.user,'user');
    this.state = {
      showProfile: true,
      firstName : this.props.user.user.user ? this.props.user.user.user.firstName : "",
      lastName: this.props.user.user.user ? this.props.user.user.user.lastName : "",
      username: this.props.user.user.user ? this.props.user.user.user.username : "",
      email: this.props.user.user.user ? this.props.user.user.user.email : "",
      dob: this.props.user.user.user ? this.props.user.user.user.dob : "",
      phoneNumber: this.props.user.user.user ? this.props.user.user.user.phoneNumbe : "",
      photo: this.props.user.user.user ? this.props.user.user.user.photo : "",
      loading: false
    }
  }

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({ [name]: value });
  }

  handleUpdate = async(e) => {
    e.preventDefault();
    const { jwt } = localStorage;
    setAuthToken(jwt)

    axios.put(`/users/update/${this.props.user.user.user._id}`, this.state)
	  .then((res) => {
	    console.log(res, "data");
	    if(res.data.success){
  			this.setState({ loading: false, message: "Profile updated!"})
        console.log("Profile updated!");
  		}
	  })
	  .catch(function (error) {
	    console.log(error, "catch error");
	  });
  }

  handleProfile = (e) => {
    if(e.target.innerText === "Edit Profile"){ 
     this.setState({ showProfile: false })
  	} else if(e.target.innerText === "Show Profile"){
      this.setState({ showProfile: true })
    }
  }

	render(){
		return( 
      <div style={{width: "500px", margin:"0 auto"}}>
        { 
          <div className="button-box" style={{ display: "flex", justifyContent:"center"}}>
            <button className="button is-danger" style={{margin: "0 5px"}} onClick={this.handleProfile}>Show Profile</button>
            <button className="button is-danger" style={{margin: "0 5px"}} onClick={this.handleProfile}>Edit Profile</button>
          </div>
        }
        {     
          this.state.showProfile ? 
            <div style={{display: "grid", placeItems:"center", marginBottom: '70px'}}>
              <div style={{ width: "500px", margin:"20px auto", padding:'40px', boxShadow:" -0.5px -0.5px 0 0 rgba(0,0,0,0.175), 2px 2px 10px 1px rgba(0,0,0,0.175)" }}>
                <figure style={{ textAlign:'center' }}>
                  <h5 style={{ fontSize: '30px', textTransform:'capitalize' }} className="userInfo">{ this.state.username.toUpperCase() || "" }</h5>
                  
                  { 
                    this.state.photo ? 
                      <div style={{ height: "200px", display: 'inline-block', width: "200px", borderRadius:'50%', margin: "20px auto" }}>
                        <img style={{ height: "100%", width: "100%", borderRadius:'50%' }} src={ this.props.user.user.photo || null } alt="Profile photo"/>
                      </div>
                    :
                      <div style={{ height: "200px", width: "200px", borderRadius:'50%', background: "#00d1b2", display:"grid", placeItems:"center", margin: "20px auto"}}>
                        <span style={{fontSize:'50px', color:"#fff", fontWeight:'bold'}}>{this.state.username ? this.state.username.slice(0,1).toUpperCase(): ""}</span>
                      </div>
                  }
                  
                </figure>
                <h5 style={{fontSize:'24px', textTransform:'uppercase', padding: "10px 0"}} className="userInfo">First Name :</h5>
                <h3>{this.state.firstName || "Not Available"}</h3>
                <h5 style={{fontSize:'24px', textTransform:'uppercase', padding: "10px 0"}} className="userInfo">Last Name :</h5>
                <h3>{this.state.lastName || "Not Available"}</h3>
                <h5 style={{fontSize:'24px', textTransform:'uppercase', padding: "10px 0"}} className="userInfo">Name :</h5>
                <h3>{this.state.username || "Not Available"}</h3>
                <h5 style={{fontSize:'24px', textTransform:'uppercase', padding: "10px 0"}} className="userInfo">Email :</h5>
                <h3>{this.state.email || "Not Available"}</h3>
                <h5 style={{fontSize:'24px', textTransform:'uppercase', padding: "10px 0"}} className="userInfo">Phone Number :</h5>
                <h3>{this.state.phoneNumber || "Not Available"}</h3>
                <h5  style={{fontSize:'24px', textTransform:'uppercase', padding: "10px 0"}}className="userInfo">DOB :</h5>
                <h3>{this.state.dob || "Not Available"}</h3>
              </div>
            </div>
          : 
  				<form style={{ marginTop:"20px", boxShadow:" -0.5px -0.5px 0 0 rgba(0,0,0,0.175), 2px 2px 10px 1px rgba(0,0,0,0.175)", padding: "20px 40px" }} className="profile-flex onclick-display-main" onSubmit={this.handleSubmit}>
            { 
              !this.state.loading ?
                <div>
                  <h5 style={{textAlign: "center", color: "red"}}>{ this.state.message || "" }</h5>
        					<div className="profile-name">
        						<input style={{width:"400px", fontSize:'16px', padding:"6px 10px", margin: "20px 0", borderBottom:'1px solid #666'}} type="text" placeholder="First name" onChange={ this.handleChange } value={this.state.firstName} name="firstName" />
        						<input style={{width:"400px", fontSize:'16px', padding:"6px 10px", margin: "20px 0", borderBottom:'1px solid #666'}} type="text" placeholder="Last name" name="lastName" onChange={ this.handleChange } value={this.state.lastName} />
        					</div>
        					<input style={{width:"400px", fontSize:'16px', padding:"6px 10px", margin: "20px 0", borderBottom:'1px solid #666'}} type="text" placeholder="Username" name="username" onChange={ this.handleChange } value={this.state.username}/>
        					<input style={{width:"400px", fontSize:'16px', padding:"6px 10px", margin: "20px 0", borderBottom:'1px solid #666'}} type="email" placeholder="Email" name="email" onChange={ this.handleChange } value={this.state.email} readOnly />
        					<input style={{width:"400px", fontSize:'16px', padding:"6px 10px", margin: "20px 0", borderBottom:'1px solid #666'}} type="number" placeholder="Phone Number" name="phoneNumber" onChange={ this.handleChange } value={this.state.phoneNumber} />
        					<input style={{width:"400px", fontSize:'16px', padding:"6px 10px", margin: "20px 0", borderBottom:'1px solid #666'}} type="date" placeholder="Date of Birth" name="dob" onChange={ this.handleChange } value={this.state.dob} />	
        					<button type="submit" className="button is-danger" onClick={this.handleUpdate}>Save</button>
                </div>
              : null 
            }
  				</form>
        }
  		</div> 
    )
	}
}

const mapStateToProps = (state) => {
	return {
		user: state.user,
	}
}

export default connect(mapStateToProps)(UserProfile);