import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const posts = [
	{
		id: 1,
		title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
		desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
		startDate: "05-10-2024",
		endDate: "25-10-2024",
		status: "pending",
	},
	{
		id: 2,
		title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
		desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
		startDate: "25-09-2024",
		endDate: "15-10-2024",
		status: "completed",
	},
	{
		id: 3,
		title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
		desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
		startDate: "15-09-2024",
		endDate: "05-10-2024",
		status: "completed",
	},
	{
		id: 4,
		title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
		desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
		startDate: "15-10-2024",
		endDate: "05-11-2024",
		status: "pending",
	},
];

export default function TaskDetail() {
	return (
		<div className="container taskdetail">
			<Card className="taskdetailcard">
				<h3>Title: {posts[0].title}</h3>
				<p>
					<b>Description:</b> {posts[0].desc}
				</p>
				<div className="d-flex justify-content-evenly">
					<p>
						<b>Start Date:</b> {posts[0].startDate}
					</p>
					<p>
						<b>End Date:</b> {posts[0].endDate}
					</p>
					<p>
						<b>Status:</b> {posts[0].status}
					</p>
				</div>
				<div className="text-end">
					<button>
						<Link to="/edittask">Edit</Link>
					</button>
				</div>
			</Card>
		</div>
	);
}
