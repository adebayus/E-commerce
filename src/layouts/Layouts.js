import React, { Component } from "react";
import Homepage from "../components/homepage/Homepage";
import Navigations from "../components/navigations/Navigations";

export default class Layouts extends Component {
	render() {
		return (
			<React.Fragment>
				<Navigations />
				<Homepage />
				<div>content</div>
			</React.Fragment>
		);
	}
}
