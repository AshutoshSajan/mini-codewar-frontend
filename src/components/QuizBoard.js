import React, { Component } from 'react';
import setAuthToken from '../utils/setAuthToken';
import { connect } from 'react-redux';
const axios = require('axios');

class QuizBoard extends Component {

	state = {
		score: 0
	}

	componentDidMount(){
		const { jwt } = localStorage;
    setAuthToken(jwt)
    axios.get('/questions')
    .then((res) => {
      if(res.data.success){
        this.props.dispatch({ type: "ADD_QUESTIONS", payload: res.data.questions[0].questions });
      	// this.props.history.push('/');
    		// this.setState({ data: [...res.data.questions[0].questions] })
    		// console.log("state set")
      }
    })
    .catch(function (error) {
      console.log(error, "catch error");
    });
	}

	handleChange = (e) => {
		const { name, value } = e.target;
		console.log(name, value);
		this.setState({[name]: value}); 
	}

	handleSubmit = (e, id) => {
		e.preventDefault();
		console.dir(e.target);
		console.log(id, e.target,"handleSubmit fired");
	}

	render() {
		const questions = this.props.questions;
		console.log(this.state, "state...");
		return (
			<div>
					{
						!questions ? null :
							questions.map((ques, ind) => (
								<div className="quiz-card" key={ind} data-id={ques._id}>
								{
									Object.keys(ques).join().trim().split(",").map((v,i) =>  (
											v === "question" ? 
												<p style={{padding: "20px 0"}} key={i} >{ques[v].toUpperCase()}</p>
											:
											v === "options" ? 
												Object.keys(ques.options).filter(ans => ans !== "ANS").map((o, idx) => (
													<div style={{display: "flex"}} key={idx}>
														<input type="radio" name={`options${ind}`} onChange={ (e) => this.handleChange(e, (`options${ind}` === ques.options.ANS))} value={ques.options[o]} /*checked={false}*/ />
														<p key={idx}>{o +" :  "+ ques.options[o]}</p>
													</div>
												))
											: "" 
									))
								}
								<button className="button is-small is-danger" style={{marginTop: '10px'}} onClick={(e)=>this.handleSubmit(e,`options${ind}`)}>Submit</button>
								</div>
							))
					}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	console.log(state, "map state quix...");
	return { questions: state.questions.data };
}
export default connect(mapStateToProps)(QuizBoard);
