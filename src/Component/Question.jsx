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
		const { question } = this.state;
		const {
			index,
			total,
		} = this.props;
		return(
			<div className="body">
    		    <h2 className="quiz-body">Q: {this.props.index+1}/{this.props.total} -- {question.question}</h2>
    		    <div className="answers">
				    <ul>
				    {
				    	question.answers.map((answer, index) => (
				    	<span key={answer.replace(' ','')} className="hover">
				        <label>
				            <input type="radio" value={index} name="options" onClick={this.checkAnswer} />
				          {answer}
				        </label>
				        <br />
				        </span>
				    	))
				    } 
				    </ul>
				</div>    
			    <div className="btn-class">
			    {
			    	index+1 === total ?
	                <button disabled={!(question.selectedAnswer !== null)} onClick={this.props.calculateScore} >{'Submit Quiz'}</button> :
	                <button disabled={!(question.selectedAnswer !== null)} onClick={this.nextQuestion} >{'Next Question'}</button>
			    }
	           </div>
			</div>

			)
	}
}
export default Answers