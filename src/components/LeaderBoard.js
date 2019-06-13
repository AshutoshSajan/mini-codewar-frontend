import React, { Component } from 'react';
var url = "http://localhost:3000/api/v1";

class LeaderBoard extends Component {
	
	state = {
		data: []
	}

	componentDidMount() {
		let jwt = localStorage.getItem("jwt") || "";
		// fetch(`${url}/users`, {
	  //     headers: {
	  //       "Content-Type": "application/json",
	  //       "Authorization": `Bearer ${jwt}`
	  //     }
	  // 	})
	  // 	.then(res => res.json())
	  // 	.then(data => {
	  // 		console.log(data, "USER_INFO data INSIDE Leaderboard.....");
		// 	this.props.dispatch({type: "USER_INFO", payload: data });
		// 	this.setState({ user: {} });
	  // 	})
	}

	render() {
		const data = this.state.data || [] || null; 

		return (
			<div>
				<p>Leaderboard</p>
			</div>
		);
	}
}

export default LeaderBoard;
