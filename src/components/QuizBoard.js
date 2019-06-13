import React, { Component } from 'react';
var url = "http://localhost:3000/api/v1";

class QuizBoard extends Component {

	state = {

	}

	componentDidMount(){
		console.log("hello cdm");
	}

	handleSubmit = (e) => {
		e.preventDefault();
  	fetch(`${url}/users/info`, {
  		method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state),
  	}).then(res => res.json())
  	.then(data => {
  		console.log(data, "user quiz submit...");
			// this.props.dispatch({type: "LOGGED_USER", payload: data });
			// this.setState();
  	})
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
							<div className="quiz-card" key={i}>
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
															<input type="checkbox" />
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

export default QuizBoard;
