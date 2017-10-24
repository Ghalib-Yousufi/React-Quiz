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
			score: 0
		}
		this.updateQuestion = this.updateQuestion.bind(this);
		this.handleShowButton = this.handleShowButton.bind(this);
	}

	handleShowButton(){
		this.setState({
            showButton: true,
            questionAnswered: true
		});
	}
	
  updateQuestion(question, preIndex) {
  	const { allQuestions, index } = this.state;
    allQuestions[preIndex] = question;
  	this.setState({ index: allQuestions.length-1 !== index ? index+1 : index, allQuestions })
  }

	render(){
		let { index, total, allQuestions, answers, correct, showButton, questionAnswered} = this.state;
		console.log(allQuestions)
		return(
			<div>
		        <Question index={index} total={total} question={allQuestions[index]} showButton={this.handleShowButton} updateQuestion={this.updateQuestion}/>
			</div>
			)
	}
}
export default Main;