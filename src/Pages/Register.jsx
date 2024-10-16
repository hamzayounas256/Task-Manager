import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Register() {
	return (
		<div className="login">
			<Card className="loginCard">
				<form>
					<h3 className="text-center">REGISTER</h3>
					<div className="loginUser">
						<label htmlFor="username">Username</label>
						<input
							type="text"
							name="username"
							id="username"
							autoComplete="off"
							required
						/>
					</div>
					<div className="loginUser">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							name="email"
							id="email"
							autoComplete="off"
							required
						/>
					</div>
					<div className="loginUser">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							name="password"
							id="password"
							autoComplete="off"
							required
						/>
					</div>
					<div className="loginSubmit">
						<Button type="submit">Register</Button>
					</div>
				</form>
				<div className="text-center">
					Already have an account? <Link to="/login">Login here</Link>
				</div>
			</Card>
		</div>
	);
}
