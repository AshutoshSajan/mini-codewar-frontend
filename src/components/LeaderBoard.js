import React, { Component } from 'react';

class LeaderBoard extends Component {
	
	state = {}

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
