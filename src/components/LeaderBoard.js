import React, { Component } from 'react';

class LeaderBoard extends Component {

	state = {

	}

	componentDidMount(){
		console.log("hello cdm");
	}

	render() {
		const questions = [{
			ques: "hello",
			a: "qwerty",
			b: "qwerty",
			c: "qwerty",
			d: "qwerty",
		}];

		return (
			<div>
					{
						questions.map((question, i) => {
							return (
								<div className="list qusestions" key={i}>
									<p>{ question.ques}</p>
									<p>{ question.a }</p>
									<p>{ question.b }</p>
									<p>{ question.c }</p>
									<p>{ question.d }</p>
								</div>
							)
						})
					}
			</div>
		);
	}
}

export default LeaderBoard;
