import React from 'react'
import { useLoaderData } from 'react-router-dom';
import Questions from '../../components/Questions/Questions';
import './QuizDetails.css';
const QuizDetails = () => {
	const quiz = useLoaderData();
	return (
<div className="m-3">
	
	<div className="container mb-5">
		<h3 className="bg-dark text-light text-center rounded p-3">{quiz.data.name} Quiz</h3>
	</div>
	
	
	<div className="container">
		{
		quiz.data.questions.map(question => <Questions
		
		key={question.id}
		question={question}
		></Questions>)
		}
		
	</div>
	
</div>
	)
}

export default QuizDetails