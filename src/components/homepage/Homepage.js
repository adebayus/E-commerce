import React, { Component } from "react";
import HeroSection from "../herosection/HeroSection";

class Homepage extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="container mx-auto">
					<HeroSection />
					<div>Rekomendasi</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Homepage;
