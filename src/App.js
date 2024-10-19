import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Layout } from "./Layout";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import AddTask from "./Components/AddTask";
import AllTasks from "./Components/AllTasks";
import TaskDetail from "./Components/TaskDetail";
import EditTask from "./Components/EditTask";

const router = createBrowserRouter([
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/register",
		element: <Register />,
	},
	{
		path: "/",
		element: <Layout />,
		children: [
			{ path: "/", element: <Home /> },
			{ path: "/addtask", element: <AddTask /> },
			{ path: "/alltasks", element: <AllTasks /> },
			{ path: "/taskdetail", element: <TaskDetail /> },
			{ path: "/edittask", element: <EditTask /> },
		],
	},
]);
function App() {
	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
