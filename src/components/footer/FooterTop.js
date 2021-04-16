import React from "react";

function FooterTop() {
	return (
		<div className="bg-gray-200 mt-10">
			<div className="container mx-auto flex py-10 justify-between">
				<div style={{ width: "850px" }} className="">
					<span className="block text-dark-frost text-lg">
						Jadilah yang pertama tahu berita terbaru event dan
						penawaran spesial kami
					</span>
					<form className="flex mt-2">
						<input
							style={{ width: "550px" }}
							type="text"
							className="mr-4 p-2 pl-5 text-lg border border-gray-300 rounded"
							placeholder="Masukan Alamat Email Anda"
						/>
						<input
							type="submit"
							value="SUBMIT"
							className="px-7 rounded text-white bg-dark-frost"
						/>
					</form>
				</div>
				<div id="sosmed">
					<span className="block text-dark-frost text-base pl-1">
						Ikuti Kami
					</span>
					<div className="flex justify-between flex-wrap">
						<a href="#">
							<img
								className="w-full"
								src="https://www.gramedia.com/assets/social-icon/instagram.png"
							/>
						</a>
						<a href="#">
							<img
								className="w-full"
								src="https://www.gramedia.com/assets/social-icon/twitter.png"
							/>
						</a>
						<a href="#">
							<img
								className="w-full"
								src="https://www.gramedia.com/assets/social-icon/facebook.png"
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FooterTop;
