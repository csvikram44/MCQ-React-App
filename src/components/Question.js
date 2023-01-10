import React from 'react';
import './Question.css';

function Question() {
	return(
		<div className="question-list form-box">
			<h1>Question List</h1>
			<div className="question-item">
				<h2>1. What does the abbreviation HTML stand for?</h2>
				<ul>
					<li>
						<label htmlFor="question1">
							<input type="checkbox" id="question1" /> <span>HyperText Markup Language</span>
						</label>
					</li>
					<li>
						<label htmlFor="question2">
							<input type="checkbox" id="question2" /> <span>HighText Markup Language</span>
						</label>
					</li>
					<li>
						<label htmlFor="question3">
							<input type="checkbox" id="question3" /> <span>HyperText Markupdown Language</span>
						</label>
					</li>
					<li>
						<label htmlFor="question4">
							<input type="checkbox" id="question4" /> <span>None of the above</span>
						</label>
					</li>
				</ul>
				<button type="submit" className="btn btn-primary">Submit</button>
			</div>
		</div>
	);
}

export default Question;	