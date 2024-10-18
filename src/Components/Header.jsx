import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
	return (
		<Navbar expand="lg" style={{ backgroundColor: "#629584" }}>
			<Container className="d-flex justify-content-between">
				<Navbar.Brand style={{ color: "#e2f1e7" }}>
					CRYSTAL SOLUTIONS
				</Navbar.Brand>
				{/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
				{/* <Navbar.Collapse id="basic-navbar-nav"> */}
				<Nav className="navi">
					{/* <Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#link">Link</Nav.Link> */}
					<NavDropdown
						title={<i class="fa-solid fa-ellipsis-vertical fa-xl"></i>}
						id="basic-nav-dropdown"
						style={{
							marginRight: "2rem",
						}}
					>
						<NavDropdown.Item>
							<Link to="/addtask">Add Records</Link>
						</NavDropdown.Item>
						<NavDropdown.Item>
							<Link to="/alltasks">View Records</Link>
						</NavDropdown.Item>
						{/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
						<NavDropdown.Divider />
						<NavDropdown.Item>User Name</NavDropdown.Item>
						<NavDropdown.Item>User Role</NavDropdown.Item>
						<NavDropdown.Item>
							<Link to="/login">Logout</Link>
						</NavDropdown.Item>
					</NavDropdown>
				</Nav>
				{/* </Navbar.Collapse> */}
			</Container>
		</Navbar>
	);
}
