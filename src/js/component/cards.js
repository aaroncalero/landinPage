import React from "react";
import { Card } from "./card.js";

export function Cards() {
	return (
		<div className="col-sm-12 py-3">
			<div className="col">
				<div className="container pt-0">
					<div className="row">
						<div className="col-sm">
							<Card />
						</div>
						<div className="col-sm">
							<Card />
						</div>
						<div className="col-sm">
							<Card />
						</div>
						<div className="col-sm">
							<Card />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
