import React from 'react';
import './Register.css';

function Register() {
	return(
		<div className="register-form form-box">
			<h1>Register</h1>
		 	<form className="mcq-form" action="/">
			 	<div className="form-group">
				    <label htmlFor="employeeid">Employee ID: </label>
				    <input type="text" className="form-control" id="employeeid" placeholder="484" required />
			  	</div>

			 	<div className="form-group">
				 	<label htmlFor="name">Employee Name:</label>
				    <input type="text" className="form-control" id="name" placeholder="Enter Name" required />
			  	</div>
			  
			  <button type="submit" className="btn btn-primary">Register</button>
			</form> 
		</div>
	);
}

export default Register;	