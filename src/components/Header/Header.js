import React from 'react'
import './Header.css';
import { Link} from 'react-router-dom';
const Header = () => {
return (
<nav className="navbar navbar-expand-lg bg-dark ">
	<div className="container-fluid">
		<a className="navbar-brand text-light fw-bold" href="/">React-Quizers</a>
		<button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		<span className="navbar-toggler-icon"></span>
		</button>
		<div className="collapse navbar-collapse" id="navbarSupportedContent">
			<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
				<li className="nav-item">
					<Link className="nav-link text-light "  aria-current="page" to='/'>Home</Link>
					
				</li>
				<li className="nav-item">
					<Link className="nav-link text-light "  aria-current="page" to='/statistics'>Statistics</Link>
					
				</li>
				<li className="nav-item">
					<Link className="nav-link text-light "  aria-current="page" to='/blog'>Blog</Link>
					
				</li>
				
				
			</ul>
			
		</div>
	</div>
</nav>
)
}
export default Header