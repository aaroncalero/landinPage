import React from "react";

export function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					Start Bootstrap
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavDropdown"
					aria-controls="navbarNavDropdown"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="container">
					<div
						className="collapse navbar-collapse navbar-collapse-expand-mr"
						id="navbarNavDropdown">
						<ul className="navbar-nav navbar-mr-1">
							<li className="nav-item">
								<a
									className="nav-link active"
									aria-current="page"
									href="#">
									Home
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									About
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Services
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Contact
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Otros
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
}
