import React from 'react'
import { useLoaderData } from 'react-router-dom';
import {useEffect, useState} from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Statistics.css';
const Statistics = () => {
	const [data, setData] = useState([]);
 useEffect( () =>{
  fetch('https://openapi.programming-hero.com/api/quiz')
  .then(response => response.json())
  .then(data => setData(data.data))
 }, []); 

	
	return (
<div className="m-3">
	<div className="container mb-5">
		<h3 className="bg-dark text-light text-center rounded p-3">Statistics</h3>
	</div>
	
	<div className="chart container d-flex ustify-content-center align-items-center bg-light rounded p-lg-5 p-md-5">
		<ResponsiveContainer width={"100%"} height={400}>
		<LineChart className="" width={1000} height ={400} data={data} >
			<Line type="monotone" dataKey="total" stroke="#82ca9d" />
				<CartesianGrid strokeDasharray="4 4" />
				<XAxis dataKey="name" />
				<YAxis/>
				<Tooltip></Tooltip>
			</LineChart>
			</ResponsiveContainer>
		</div>
	</div>
	)
}

export default Statistics