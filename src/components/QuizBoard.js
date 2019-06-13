import React, { Component } from 'react';
import setAuthToken from '../utils/setAuthToken';
const axios = require('axios');

class QuizBoard extends Component {

	state = {

	}

	componentDidMount(){
		const { jwt } = localStorage;
    setAuthToken(jwt)
    axios.get('/questions')
    .then((res) => {
      console.log(res, "questions...");
      if(res.data.success){
        this.props.dispatch({ type: "ADD_QUESTIONS", payload: res.data.questions });
        // this.props.history.push('/');
    		this.setState({data: res.data.questions})
      }
    })
    .catch(function (error) {
      console.log(error, "catch error");
    });
	}

	handleSubmit = (e) => {
		// e.preventDefault();
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
