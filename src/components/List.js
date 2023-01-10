import React from 'react';
import './List.css';

function List() {
	return(
		<div className="employee-list form-box">
			<h1>Registration List</h1>
			 <table className="table table-bordered" >
				 <thead className="thead-dark">
				 	<tr>
				 		<th>Employee ID</th>
				 		<th>Employee Name</th>
				 	</tr>
				 </thead>
			 	<tbody>
				 	<tr>
				 		<td>484</td>
				 		<td>Vikram Kumar</td>
				 	</tr>
			 	</tbody>
			 </table>
		</div>
	);
}

export default List;	