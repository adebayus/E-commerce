import React from "react";
import Caraousel from "react-slick";
import "./slider.css";

function CustomArrow(props) {
	// console.log({ ...props });
	let newStyler;
	if (props.type === "right") {
		newStyler = { ...props.style, right: "20px", zIndex: "10" };
		// newStyler = "right: 0px; z-index:99; display:block;";
	} else {
		newStyler = { ...props.style, left: "20px", zIndex: "10" };
	}
	return (
		<div
			className={props.className}
			style={newStyler}
			onClick={props.onClick}
		/>
	);
}

function Slider(props) {
	let caraouselSetting = {
		dots: true,
		className: "idontknow",
		infinite: true,
		autoplay: true,
		autoplaySpeed: 3000,
		slidesToShow: 1,
		nextArrow: <CustomArrow type="right" />,
		prevArrow: <CustomArrow />,
		dotsClass: "slick-dots md-size",
		appendDots: (dots) => {
			return (
				<div
					style={{
						padding: "10px",
						bottom: "0px",
					}}
				>
					<ul style={{ margin: "0px" }}> {dots} </ul>
				</div>
			);
		},
		customPaging: (dots) => {
			return <button />;
		},
	};

	if (props.type === "multiple") {
		console.log({ ...props });
		const duplicate = {
			...caraouselSetting,
			slidesToShow: props.numberShow,
			slideToScrool: 1,
			autoplay: true,
			dots: false,
		};
		caraouselSetting = { ...duplicate };
	}
	console.log(caraouselSetting);
	return (
		<Caraousel style={{ height: "100%" }} {...caraouselSetting}>
			{props.children}
		</Caraousel>
	);
}

export default Slider;
