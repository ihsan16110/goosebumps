import React from 'react'
import './Quiz.css';
import { Link } from 'react-router-dom';
const Quiz = (props) => {

	const { name, logo, total, id} = props.quiz;
	return (
		<div className="card  m-3">
		<img src={logo} className="card-img-top p-2" alt="..." />
		<div className="m-2 card-body bg-secondary d-flex justify-content-between rounded">
			<h5 className="card-title text-light">{name}</h5>
			<p className="card-text text-light">Total Question: {total}</p>
		</div>
		<div className="p-2">
			<button className=" bg-dark text-light btn  w-100 rounded" to=''><Link className="nav-link p-0 m-0" to={`quizdetails/${id}`}>See More <i class="fa-solid fa-arrow-right"></i></Link></button>
		</div>
	</div>
	)
}

export default Quiz