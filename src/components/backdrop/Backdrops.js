import React from "react";

function Backdrops(props) {
	let canClick = true;
	let nameClass = "fixed h-screen w-screen top-0 left-0 right-0 bottom-0";
	if (props.type === "loader") {
		nameClass += " bg-white";
	}
	return (
		<div
			{...(canClick && { onClick: props.closed })}
			className={nameClass}
		></div>
	);
}

export default Backdrops;
