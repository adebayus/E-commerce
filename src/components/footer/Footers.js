import React from "react";
import Copyright from "./Copyright";
import FooterBottom from "./FooterBottom";
import FooterTop from "./FooterTop";

function Footers() {
	return (
		<React.Fragment>
			<FooterTop />
			<FooterBottom />
			<Copyright />
		</React.Fragment>
	);
}

export default Footers;
