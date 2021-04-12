import React, { Component } from "react";
import Backdrops from "../backdrop/Backdrops";
import { connect } from "react-redux";

class Categories extends Component {
	state = {
		idShow: 0,
	};

	handlingMouseEnter = (id) => {
		// console.log("mouse Enter");
		this.setState({
			idShow: id,
		});
	};
	render() {
		let activeCategory = "text-hot-pink";
		const listCategoriesArray = Object.keys(this.props.stt.data.categories);
		const listCategories = listCategoriesArray.map((x, index) => {
			return (
				<li
					key={index}
					onMouseEnter={() => this.handlingMouseEnter(index)}
					className={`text-lg tracking-wide ${
						this.state.idShow == index
							? activeCategory
							: "text-dark-frost"
					} mb-3 cursor-pointer block hover:text-hot-pink uppercase`}
				>
					<a> {x} </a>
				</li>
			);
		});

		const categoryKey = listCategoriesArray[this.state.idShow];
		const getDataBooks = this.props.stt.data.categories[categoryKey];
		const listBooks = getDataBooks.map((x, index) => {
			// console.log("split", x.split(" "));
			let upperCase = x
				.split(" ")
				.map((word) => word[0].toUpperCase() + word.slice(1));
			let joinText = upperCase.join(" ");
			return (
				<li
					key={index}
					className="text-dark-frost cursor-pointer block hover:text-hot-pink"
				>
					{joinText}
				</li>
			);
		});

		return (
			<React.Fragment>
				<Backdrops closed={this.props.clickClose} />
				<div className="fixed left-0 right-0 shadow-lg bg-white h-auto py-4">
					<div
						style={{ height: "400px" }}
						className="h-full overflow-y-auto"
					>
						<div className="container mx-auto flex">
							<div style={{ width: "40%" }} className="h-auto">
								<ul style={{ minHeight: "400px" }}>
									{listCategories}
								</ul>
							</div>

							<div className="h-auto border-r-2 border-gray-300">
								{" "}
							</div>

							<div
								style={{ width: "60%" }}
								className="relative pl-10"
							>
								<ul className="h-16 gap-2 grid grid-cols-2">
									{listBooks}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

const MapStateToProps = (state) => {
	return {
		stt: state,
	};
};

export default connect(MapStateToProps)(Categories);
