import React from "react";
import { Card } from "react-bootstrap";

export default function AddUser() {
	return (
		<div className="adduser">
			<Card className="addusercard">
				<form className="adduserform">
					<h3 className="text-center">ADD A NEW TASK</h3>
					<div className="dates d-flex justify-content-between">
						<div className="">
							<label htmlFor="startDate">Start Date </label>
							<input type="date" className="form-control" />
						</div>
						<div className="">
							<label htmlFor="endDate">End Date </label>
							<input type="date" className="form-control" />
						</div>
					</div>
					<div className="form-group">
						<label htmlFor="assignto">Assigned to</label>
						<input type="assignto" className="form-control" id="assignto" />
					</div>
					<div className="form-group">
						<label htmlFor="title">Title</label>
						<input type="title" className="form-control" id="title" />
					</div>
					<div className="form-group">
						<label htmlFor="detail">Detail</label>
						<textarea className="form-control" id="" rows="4" cols="33" />
					</div>
					<div className="d-flex justify-content-end">
						<button type="submit" className="btn adduserButton">
							Add Task
						</button>
					</div>
				</form>
			</Card>
		</div>
	);
}
