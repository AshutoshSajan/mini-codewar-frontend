import React, { Component } from 'react';

class LeaderBoard extends Component {

	state = {

	}

	componentDidMount(){
		console.log("hello cdm");
	}

	render() {
		const questions = [{
			ques: "hello user wellcome to codewar",
			a: "qwerty",
			b: "qwerty",
			c: "qwerty",
			d: "qwerty",
		}];

		return (
			<div>
					{
						questions.map((question, i) => (
							<div className="list" key={i}>
								{
									Object.keys(question).map(v => (
										<div key={v}>
											{ 
												v === "ques" ?
													<p style={{textAlign: "center"}}>{question[v]}</p>
												: null
											}
											<div>
												{
													v === "ques" ? null :
													<div className="questions">
														<p>{ [v] }</p>
														<p>
															<span>{ question[v] }</span>
															<input type="radio" />
														</p>
													</div>
												}
											</div>
										</div>
									))
								}
							</div>
						))
					}
			</div>
		);
	}
}

export default LeaderBoard;
