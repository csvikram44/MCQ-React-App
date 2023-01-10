import React from 'react';
import './AddQuestion.css';

function AddQuestion() {
	return(
		<div className="add-question form-box">
			<h1>Add Question</h1>
			 <form className="mcq-form" action="/">
			 <div className="form-group">
			    <label htmlFor="question">Question: </label>
			    <input type="text" className="form-control" id="question" placeholder="Enter question" required />
			    
			  </div>

			 <div className="form-group">
			 	<label htmlFor="option1">Option 1:</label>
			    <input type="text" className="form-control" id="option1" placeholder="Enter option 1" required />
			  </div>
			  <div className="form-group">
			 	<label htmlFor="option2">Option 2:</label>
			    <input type="text" className="form-control" id="option2" placeholder="Enter option 2" required />
			  </div>
			  <div className="form-group">
			 	<label htmlFor="option3">Option 3:</label>
			    <input type="text" className="form-control" id="option3" placeholder="Enter option 3" required />
			  </div>
			  <div className="form-group">
			 	<label htmlFor="option4">Option 4:</label>
			    <input type="text" className="form-control" id="option4" placeholder="Enter option 4" required />
			  </div>
			  
			  <button type="submit" className="btn btn-primary">Register</button>
			</form> 
		
		</div>
	);
}

export default AddQuestion;	