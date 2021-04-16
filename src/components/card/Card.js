import React from "react";
import Badge from "../badge/Badge";

function Card() {
	return (
		<div className="p-2 m-2 bg-white rounded-sm">
			<div className="border mb-4 border-gray-200 rounded-sm flex justify-center">
				<img src="https://cdn.gramedia.com/uploads/items/9786020641270_devils_daughter_cov__w150_hauto.jpg" />
			</div>
			<div className="text-sm line-clamp-2 mb-1 text-dark-frost font-bold break-all max-h-12">
				Historical Romance: Romansa Musim Panas (Devil's Daughter)
			</div>
			<span className="block mb-1 text-sm text-gray-400 ">Tyan Gigs</span>
			<span
				style={{ marginBottom: "5px" }}
				className="text-xs text-gray-400 flex items-center"
			>
				<span className="italic line-through">Rp 70.000</span>
				<span className="ml-2">
					<Badge />
				</span>
			</span>
			<span className="mb-9 text-xs font-bold block text-hot-pink">
				Rp 58.000
			</span>
		</div>
	);
}

export default Card;
