import React, { Component } from "react";
import Footers from "../components/footer/Footers";
import Homepage from "../components/homepage/Homepage";
import Navigations from "../components/navigations/Navigations";

export default class Layouts extends Component {
	render() {
		return (
			<React.Fragment>
				<Navigations />
				<Homepage />
				<Footers />
			</React.Fragment>
		);
	}
}
