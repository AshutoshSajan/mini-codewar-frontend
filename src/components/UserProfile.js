import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
const axios = require('axios');

class UserProfile extends React.Component{  
  state = {
    // showProfile: true,
    // firstName : this.props.user.user.firstName || "",
    // lastName: this.props.user.user.lastName || "",
    // name: this.props.user.user.name || "",
    // email: this.props.user.user.email || "",
    // dob: this.props.user.user.dob || "",
    // phoneNumber: this.props.user.user.phoneNumber || "",
    // photo: this.props.user.user.photo || this.props.user.user.google.photo || "",
  }

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({ [name]: value });
  }

	handleFile = (e) => {
    // const photo = event.target.files[0];
    // const sendImg = (str) => {
    //   str ? this.setState({ photo: str }) : null;
    // }

    // // file conversion to base64 using FileReader fn
    // const reader = new FileReader();
    // reader.onload = (event) => {
    //   sendImg(event.target.result);
    // };
    // reader.readAsDataURL(photo);
  };


  handleSubmit = async(e) => {
    e.preventDefault();
    axios.post('/users/login', this.state)
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
            <div style={{display: "grid", placeItems:"center", marginBottom: '70px', padding: "20px 40px"}}>
              <div style={{ width: "500px", margin:"20px auto", padding:'40px', boxShadow:" -0.5px -0.5px 0 0 rgba(0,0,0,0.175), 2px 2px 10px 1px rgba(0,0,0,0.175)" }}>
                <figure style={{ textAlign:'center' }}>
                  <label style={{ display: "block" }}className="userInfo">{ this.state.user.username || "" }</label>
                  
                  { 
                    this.props.user.user.photo ? 
                      <div style={{ height: "200px", display: 'inline-block', width: "200px", borderRadius:'50%', margin: "20px auto" }}>
                        <img style={{ height: "100%", width: "100%", borderRadius:'50%' }} src={ this.props.user.user.photo || null } alt="Profile photo"/>
                      </div>
                    :
                      <div style={{ height: "200px", width: "200px", borderRadius:'50%', background: "#00d1b2", display:"grid", placeItems:"center", margin: "20px auto"}}>
                        <span style={{fontSize:'50px', color:"#fff", fontWeight:'bold'}}>{this.state.name ? this.state.name.slice(0,1).toUpperCase(): ""}</span>
                      </div>
                  }
                  
                </figure>
                <label className="userInfo">First Name :</label><h3>{this.state.firstName || "Not Available"}</h3>
                <label className="userInfo">Last Name :</label><h3>{this.state.lastName || "Not Available"}</h3>
                <label className="userInfo">Name :</label><h3>{this.state.name || "Not Available"}</h3>
                <label className="userInfo">Email :</label><h3>{this.state.email || "Not Available"}</h3>
                <label className="userInfo">Phone Number :</label><h3>{this.state.phoneNumber || "Not Available"}</h3>
                <label className="userInfo">DOB :</label><h3>{this.state.dob || "Not Available"}</h3>
              </div>
            </div>
          : 
  				<form style={{ marginTop:"20px", boxShadow:" -0.5px -0.5px 0 0 rgba(0,0,0,0.175), 2px 2px 10px 1px rgba(0,0,0,0.175)" }} className="profile-flex onclick-display-main" onSubmit={this.handleSubmit}>
            { 
              !this.state.loading ?
                <div>
                  <label style={{textAlign: "center", color: "red"}}>{ this.state.message || "" }</label>
        					<div className="profile-name">
        						<input type="text" placeholder="First name" onChange={ this.handleChange } value={this.state.firstName} name="firstName" />
        						<input type="text" placeholder="Last name" name="lastName" onChange={ this.handleChange } value={this.state.lastName} />
        					</div>
        					<input type="text" placeholder="Username" name="name" onChange={ this.handleChange } value={this.state.name}/>
        					<input type="email" placeholder="Email" name="email" onChange={ this.handleChange } value={this.state.email} readOnly />
        					<input type="number" placeholder="Phone Number" name="phoneNumber" onChange={ this.handleChange } value={this.state.phoneNumber} />
        					<input type="date" placeholder="Date of Birth" name="dob" onChange={ this.handleChange } value={this.state.dob} />	
        					<button type="submit" className="btn-standard">Save</button>
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
	console.log(state);
	return {
		user: state.user,
	}
}

export default connect(mapStateToProps)(UserProfile);