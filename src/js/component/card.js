import React from "react";
import ReactDOM from "react-dom";
import imagen from "/workspace/react-hello/src/img/big-project-image.png";

export function Card() {
	return (
		<div className="card">
			<div className="card-top pt-0">
				<img className="card-img" src={imagen} alt={"imagen"} />
			</div>
			<h1 className="card-title ml-5"> Card Title</h1>
			<div className="card-body ">
				Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
				tempor ut labore et dolore magna aliqua. Ut enim ad minim
			</div>

			<div className="btn" style={{ backgroundColor: "#e5e0e0" }}>
				<a
					className="btn btn-primary btn-sm mr-5 mx-auto my-3"
					sytle="width:1px"
					href="#"
					role="button">
					Find Out More!
				</a>
			</div>
		</div>
	);
}
