import React, { Component } from 'react';
var url = "http://localhost:3000/api/v1";

class LeaderBoard extends Component {
	
	state = {
		data: []
	}

	componentDidMount() {
	// const { jwt } = localStorage;
  //   setAuthToken(jwt)
  //   axios.post('/users/info')
  //   .then((res) => {
  //     console.log(res, "data");
  //     if(res.data.success){
  //       this.props.dispatch({ type: "REGISTER_USER", payload: res.data });
  //       this.props.history.push('/');
  //     }
  //   })
  //   .catch(function (error) {
  //     console.log(error, "catch error");
  //   });
	}

	render() {
		const data = this.state.data || null; 

		return (
			<div>
				<p>Leaderboard</p>
			</div>
		);
	}
}

export default LeaderBoard;
