import React, { Component } from "react";
import Slider from "react-slick";
import classes from "./hero.css";

function CustomArrow(props) {
	// console.log({ ...props });
	let newStyler;
	if (props.type === "right") {
		newStyler = { ...props.style, right: "20px", zIndex: "99" };
		// newStyler = "right: 0px; z-index:99; display:block;";
	} else {
		newStyler = { ...props.style, left: "20px", zIndex: "99" };
	}
	return (
		<div
			className={props.className}
			style={newStyler}
			onClick={props.onClick}
		/>
	);
}

export default class HeroSection extends Component {
	render() {
		const caraouselSetting = {
			dots: true,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 3000,
			slidesToShow: 1,
			nextArrow: <CustomArrow type="right" />,
			prevArrow: <CustomArrow />,
			appendDots: (dots) => {
				console.log("[dots]", dots);
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
				console.log("dots", dots);
				return <button />;
			},
		};

		return (
			<React.Fragment>
				<span className="text-hot-pink block pt-6 font-bold pb-4 px-3 text-right">
					<a> Lihat Semua </a>
				</span>
				<div
					style={{ height: "336px" }}
					className="w-full grid grid-rows-2 grid-cols-3 gap-2"
				>
					<div className="col-start-1 col-end-3 row-start-1 row-end-3">
						<div className="h-full w-full relative">
							<Slider
								{...caraouselSetting}
								className="bg-gray-600 w-full h-full"
							>
								<div>
									<img
										className="object-cover h-full rounded-md"
										src="https://cdn.gramedia.com/uploads/marketing/Benih_Baik_Biru_Storefront_REVISI__wauto_h336.png"
									/>
								</div>
								<div>
									<img
										className="object-cover h-full rounded-md"
										src="https://cdn.gramedia.com/uploads/marketing/Benih_Baik_Biru_Storefront_REVISI__wauto_h336.png"
									/>
								</div>
							</Slider>
						</div>
					</div>
					<img
						className="rounded-md object-cover w-full h-full"
						src="https://cdn.gramedia.com/uploads/marketing/Gramedia_Ramadhan_2021_Storefront_1_5XKRLR7__wauto_h164.png"
					/>
					<img
						className="rounded-md object-cover w-full h-full"
						src="https://cdn.gramedia.com/uploads/marketing/Gramedia_Ramadhan_2021_Storefront_1_5XKRLR7__wauto_h164.png"
					/>
				</div>
			</React.Fragment>
		);
	}
}
