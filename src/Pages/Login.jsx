import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Login() {
	return (
		<div className="login">
			<Card className="loginCard">
				<form>
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
					{/* //jkh */}
				</form>
				<div className="text-center">
					Don't have an account? <Link to="/register">Register here</Link>
				</div>
			</Card>
		</div>
	);
}
