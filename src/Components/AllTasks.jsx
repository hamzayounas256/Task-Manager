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

export default function AllTasks() {
	return (
		<div className="container text-center">
			<h1 className="my-3">Tasks</h1>
			{/* <Card className="my-4 alltasksupcard">
				<span style={{ width: "40px" }}>Sr#</span>
				<span>Title</span>
				<span>Description</span>
				<span style={{ width: "150px" }}>Start Date</span>
				<span style={{ width: "150px" }}>Due Date</span>
				<span style={{ width: "100px" }}>Status</span>
				<span>Action</span>
			</Card> */}
			{posts.map((post) => (
				<Card className="my-4 alltaskscard">
					<span style={{ width: "40px" }}>{post.id}</span>
					<span>{post.title}</span>
					<span>{post.desc}</span>
					<span style={{ width: "150px" }}>{post.startDate}</span>
					<span style={{ width: "150px" }}>{post.endDate}</span>
					<span style={{ width: "100px" }}>{post.status}</span>
					<span>
						<button>
							<Link to="/taskdetail">Read more</Link>
						</button>
					</span>
				</Card>
			))}
		</div>
	);
}
