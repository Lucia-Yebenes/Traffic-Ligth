import React, { useState } from "react";

export function Trafficligth() {
	const [ligth, setLigth] = useState("");

	return (
		<div className="body">
			<div className="contened">
				<div className="con2">
					<button
						className={
							"red " + (ligth == "colorligthRed" ? ligth : "")
						}
						onClick={() => setLigth("colorligthRed")}></button>
					<button
						className={
							"yellow " +
							(ligth == "colorligthYellow" ? ligth : "")
						}
						onClick={() => setLigth("colorligthYellow")}></button>
					<button
						className={
							"green " + (ligth == "colorligthGreen" ? ligth : "")
						}
						onClick={() => setLigth("colorligthGreen")}></button>
				</div>
			</div>
			<div className="palo"></div>
			<div className="base"></div>
		</div>
	);
}
