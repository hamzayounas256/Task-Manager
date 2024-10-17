import React from "react";

export default function Footer() {
	return (
		<div
			className="text-center mb-0"
			style={{
				position: "fixed",
				bottom: "0",
				left: "0",
				width: "100%",
				height: "auto",
				backgroundColor: "#629584",
			}}
		>
			<div
				className="text-center"
				style={{ color: "#e2f1e7", fontWeight: "500" }}
			>
				&copy; {new Date().getFullYear()} Copyright:{" "}
				<a href="#footer">Crystal Solutions</a>
			</div>
		</div>
	);
}
