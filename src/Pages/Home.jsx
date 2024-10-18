import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
	return (
		<div className="home">
			<div>
				<h1>WELCOME TO TASK MANAGER</h1>
			</div>
			<div className="homebtn">
				<button>
					<Link to="/addtask">Add New Task</Link>
				</button>
				<button>
					<Link to="/alltasks">View All Tasks</Link>
				</button>
			</div>
		</div>
	);
}
