import React from "react";
import Backdrops from "../backdrop/Backdrops";
import classes from "./loader.module.css";
export default function Loader() {
	return (
		<React.Fragment>
			<Backdrops type="loader" />
			<div style={{ marginTop: "150px" }} className="flex justify-center">
				<div className={classes.Loader}></div>
			</div>
		</React.Fragment>
	);
}
