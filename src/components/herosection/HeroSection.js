import React, { Component } from "react";
import Slider from "../slider/Slider";

export default class HeroSection extends Component {
	render() {
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
							<Slider>
								<div className="beforeimg">
									<img
										className="object-cover h-full rounded-md"
										src="https://cdn.gramedia.com/uploads/marketing/Benih_Baik_Biru_Storefront_REVISI__wauto_h336.png"
									/>
								</div>
								<div className="beforeimg">
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
