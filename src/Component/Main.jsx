import React, {Component} from 'react';
import data from './Data.jsx';
import Question from './Question.jsx';
import '../Styles/style.css';

class Main extends Component{
	constructor(props) {
		super(props);
		this.state = {
			index: 0,
			allQuestions: data,
			total: data.length,
			showButton: false,
			questionAnswered: false,
			score: 0,
			showQuestion: true
		}
		this.updateQuestion = this.updateQuestion.bind(this);
		this.handleShowButton = this.handleShowButton.bind(this);
		this.calculateScore = this.calculateScore.bind(this);
	}

	handleShowButton(){
		this.setState({
            showButton: true,
            questionAnswered: true
		});
	}

	calculateScore = () => {
		let score = 0;
		const { allQuestions } = this.state;
		allQuestions.forEach((questionObj) => {
			if (questionObj.selectedAnswer === questionObj.correct) {
				score++;
			}
		});
		this.setState({ score, showQuestion: false });
	}
	
  updateQuestion(question, preIndex) {
  	const { allQuestions, index } = this.state;
    allQuestions[preIndex] = question;
  	this.setState({ index: allQuestions.length-1 !== index ? index+1 : index, allQuestions })
  }

	render(){
		let { index, total, allQuestions, showButton, score, showQuestion } = this.state;
		return(
			<div>
			{
				showQuestion ?
		        <Question 
		          index={index} 
		          total={total} 
		          question={allQuestions[index]} 
		          showButton={this.handleShowButton}
		          updateQuestion={this.updateQuestion}
		          calculateScore={this.calculateScore}
		        />
		        :
		    	<div className="body">
		    		<p>
		    		Quiz Successfully Submitted,
		    		Your score is {score} / {total}
		    		</p>
		    	</div>
		    }    
			</div>
		)
	}
}
export default Main;