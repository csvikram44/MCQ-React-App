import React from 'react';
import './Result.css';

function Result() {
	return(
		<div className="result form-box">
			<h1>Result Board</h1>
			
			<table className="table table-bordered" >
				 <thead className="thead-dark">
				 	<tr>
				 		<th>Question</th>
				 		<th>Attempts</th>
				 		<th>Correct</th>
				 		<th>Wrong</th>
				 	</tr>
				 </thead>
			 	<tbody>
				 	<tr>
				 		<td>1</td>
				 		<td>10</td>
				 		<td>6</td>
				 		<td>4</td>
				 	</tr>
			 	</tbody>
			 </table>
		</div>
	);
}

export default Result;	