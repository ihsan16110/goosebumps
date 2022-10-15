import React from 'react'
import { useLoaderData } from 'react-router-dom';
import './QuizStore.css';
import { Link } from 'react-router-dom';
import Quiz from '../../components/Quiz/Quiz';
const QuizStore = () => {
	const quizs = useLoaderData();
	return (
<div>
	<div className="p-lg-5 p-md-5 p-sm-5 mb-3 bg-light rounded-3 bg-dark text-light m-3">
		<div className="container-fluid header py-5 d-flex justify-content-center align-items-center flex-column">
			<h1 className="display-5 fw-bold "> <span className="text-dark text-light bg-light rounded px-3">React-Quizers</span></h1>
			
			<p className="col-md-8 fs-4 text-center">Test your knowledge about different programming languages. 
			It's a free online Quiz Test site. Where you can easily test yourself.
			</p>
			<button className="btn btn-primary btn-lg" type="button"><Link className="nav-link p-0 m-0" to={`statistics`}>See Statistics </Link></button>
			
		</div>
	</div>

	<div className="quiz-container container">
		{
			quizs.data.map(quiz => <Quiz 
				key={quiz.id}
				quiz={quiz}

				></Quiz>)
		}
	</div>
</div>
	)
}

export default QuizStore