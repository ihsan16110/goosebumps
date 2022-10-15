import React from 'react'
import './NotFound.css';
import Header from '../../components/Header/Header';

const NotFound = () => {
	return (
		
		
		<div>
		<Header></Header>
		<div className="container bg-dark text-light notfound-bg d-flex justify-content-center align-items-center flex-column">
			<h1>404</h1>
			<p>Oops! Sorry.This route not found</p>
		</div>

		</div>
	)
}

export default NotFound