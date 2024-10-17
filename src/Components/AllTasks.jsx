import React from "react";
import { Button, Card } from "react-bootstrap";

export default function AllTasks() {
	return (
		<div className="container text-center">
			<Card className="my-3 alltaskCard">
				<table className="w-100">
					<thead>
						<tr>
							<th>Sr: </th>
							<th>Title</th>
							<th>Start Date</th>
							<th>End Date</th>
							<th>Status</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
							<td>Reports</td>
							<td>10-10-2024</td>
							<td>20-10-2024</td>
							<td>Pending</td>
							<td>
								<button>Read more</button>
							</td>
						</tr>
						<tr>
							<td>1</td>
							<td>Reports</td>
							<td>10-10-2024</td>
							<td>20-10-2024</td>
							<td>Pending</td>
							<td>
								<button>Read more</button>
							</td>
						</tr>
					</tbody>
				</table>
			</Card>
		</div>
	);
}
