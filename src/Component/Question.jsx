import React, {Component} from 'react';
import '../Styles/style.css';

class Answers extends Component{
	constructor(props) {
		super(props);
		this.state = {
			question: props.question,
			index: props.index,
			total: props.total,
		}
		this.checkAnswer = this.checkAnswer.bind(this);
		this.nextQuestion = this.nextQuestion.bind(this);
	}

	checkAnswer(e) {
			const answer = +e.target.value;
			const { question } = this.state;
			question.selectedAnswer = answer;
			this.setState({ question });
	}

	nextQuestion(){
		const { question, index } = this.state
		this.props.updateQuestion(question, index)
	}
  componentWillReceiveProps(nextProps) {
  	this.setState({ question: nextProps.question, index: nextProps.index });
  }
	render(){
		console.log(this.state)
		const { question } = this.state;
		return(
			<div className="body">
    		    <h2 className="quiz-body">Q: {this.props.index+1}/{this.props.total} -- {question.question}</h2>
    		    <div className="answers">
				    <ul>
				    {
				    	question.answers.map((answer, index) => (
				    		<span key={index}>
				        <label>
				            <input type="radio" value={index} selected={answer.selectedAnswer === answer.correct} name="options" onClick={this.checkAnswer} />
				          {answer}
				        </label>
				        <br />
				        </span>
				    	))
				    } 
				    </ul>
				</div>    
			    <div className="btn-class">
	              <button disabled={!(question.selectedAnswer !== null)} onClick={this.nextQuestion} >Next Question</button>
	           </div>
			</div>

			)
	}
}
export default Answers