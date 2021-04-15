import React, { Component } from "react";
import Flashsales from "../flashsale/Flashsales";
import HeroSection from "../herosection/HeroSection";

class Homepage extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="container mx-auto">
					<HeroSection />
					<Flashsales />
				</div>
			</React.Fragment>
		);
	}
}

export default Homepage;
