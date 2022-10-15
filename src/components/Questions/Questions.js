import React from 'react'
import {useState} from 'react';
import './Questions.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Questions = (props) => {
	const {id,options, question, correctAnswer} = props.question;
	const [counter, setCounter] = useState(0);
	const increase = () => {
    setCounter(count => count + 1);
  	};

  	const showToastMessage = () => {
        toast.success('Correct Answer', {
            position: toast.POSITION.TOP_RIGHT
        });
    };
    const showMessage = () => {
        toast.error('Wrong Answer', {
            position: toast.POSITION.TOP_RIGHT
        });
    };

    
  	const checkAnswer = () => {
  		
  		let optionChoice = document.querySelector('input[name="option"]:checked').value;
  		
  		if(optionChoice === correctAnswer){
  			{showToastMessage()}
  		}
  		else{
  		
  			{showMessage()}
  		}
  	}
  	
  	const seeAnswer = () => {	
 	const element = document.getElementById(id);
 	element.classList.remove("d-none");
  	}

  	
	return (
		

	
			

	<div className="card  bg-light border-0 shadow-lg m-lg-5 p-lg-5 m-md-5 p-md-5 m-sm-0 p-sm-0">
		<div className="d-flex justify-content-between padding">
			<h3>Quiz :{question}</h3>
		<i onClick={() => seeAnswer()} class="eye fa-solid fa-eye"></i>

		</div>
		
		<div className="option-container">
			
			<div className="form-check">
				<input  onClick={() => checkAnswer()} className="form-check-input " type="radio" name="option" value={options[0]} />
				<ToastContainer />
				<label className="form-check-label" >
					{options[0]}
				</label>
			</div>
			<div className="form-check">
				<input  onClick={() => checkAnswer()} className="form-check-input " type="radio" name="option" value={options[1]} />
				<ToastContainer />
				<label className="form-check-label" >
					{options[1]}
				</label>
			</div>
			<div className="form-check">
				<input  onClick={() => checkAnswer()} className="form-check-input " type="radio" name="option" value={options[2]} />
				<ToastContainer />
				<label className="form-check-label" >
					{options[2]}
				</label>
			</div>
			<div className="form-check">
				<input  onClick={() => checkAnswer()} className="form-check-input " type="radio" name="option" value={options[3]} />
				<ToastContainer />
				<label className="form-check-label" >
					{options[3]}
				</label>
			</div>
		</div>

		<small id={id} className="d-none text-center">{correctAnswer}</small>
	</div>
	


		
	)
}

export default Questions