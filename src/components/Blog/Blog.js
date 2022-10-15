import React from 'react'
import './Blog.css';
const Blog = () => {
	return (
		<div className="m-3">
			<div className="container mb-5">
				<h3 className="bg-dark text-light text-center rounded p-3">Blog</h3>
			</div>
			
			<div className="container d-flex ustify-content-center align-items-center bg-light rounded p-lg-5 my-lg-5 p-sm-0 my-sm-0">
				<div class="accordion my-5" id="accordionExample">
					<div class="accordion-item ">
						<h2 class="accordion-header" id="headingOne">
						<button class="accordion-button bg-dark text-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
						What is the purpose of react router?
						</button>
						</h2>
						<div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
							<div class="accordion-body">
								 <p class="text-secondary">React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
								
							</div>
						</div>
					</div>
					<div class="accordion-item my-2 border">
						<h2 class="accordion-header" id="headingTwo">
						<button class="accordion-button collapsed bg-dark text-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
						How context api works?
						</button>
						</h2>
						<div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
							<div class="accordion-body">
								<p class="text-secondary">The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
							</div>
						</div>
					</div>
					<div class="accordion-item my-2 border">
						<h2 class="accordion-header" id="headingThree">
						<button class="accordion-button collapsed bg-dark text-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
						What is useRef hook in React?
						</button>
						</h2>
						<div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
							<div class="accordion-body">
								<p class="text-secondary">The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.etc</p>
							</div>
						</div>
					</div>
					
				</div>
			</div>

		</div>
	)
}

export default Blog