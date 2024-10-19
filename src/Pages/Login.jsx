import { Button, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
	const navigate = useNavigate();
	const handleLogin = () => {
		navigate("/");
	};
	return (
		<div className="login">
			<Card className="loginCard">
				<form onSubmit={handleLogin}>
					<h3 className="text-center">LOGIN</h3>
					<div className="loginUser mb-2">
						<label htmlFor="username">Username</label>
						<input
							className="form-control"
							type="text"
							name="username"
							id="username"
							autoComplete="off"
							required
						/>
					</div>
					<div className="loginUser mt-2">
						<label htmlFor="password">Password</label>
						<input
							className="form-control"
							type="password"
							name="password"
							id="password"
							autoComplete="off"
							required
						/>
					</div>
					<div className="loginSubmit">
						<Button type="submit">Login</Button>
					</div>
				</form>
				<div className="text-center mb-3">
					Don't have an account? <Link to="/register">Register here</Link>
				</div>
			</Card>
		</div>
	);
}
