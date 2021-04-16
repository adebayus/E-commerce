import React from "react";

function FooterBottom() {
	return (
		<div className="bg-gray-200 mt-1 py-4">
			<ul className="container mx-auto flex justify-between">
				<li>
					<span className="block mb-4 text-dark-frost text-base tracking-wide font-bold uppercase">
						Belanja
					</span>
					<a className="block text-base mb-2 text-gray-400">
						Berbelanja
					</a>
					<a className="block text-base mb-2 text-gray-400">
						Pembayaran
					</a>
					<a className="block text-base mb-2 text-gray-400">
						Pengiriman
					</a>
				</li>
				<li>
					<span className="block mb-4 text-dark-frost text-base tracking-wide font-bold uppercase">
						Tentang BookMEdia
					</span>
					<a className="block text-base mb-2 text-gray-400">
						Tentang Kami
					</a>
					<a className="block text-base mb-2 text-gray-400">
						Toko Kami
					</a>
					<a className="block text-base mb-2 text-gray-400">
						Kerja Sama
					</a>
				</li>
				<li>
					<span className="block mb-4 text-dark-frost text-base tracking-wide font-bold uppercase">
						Lainnya
					</span>
					<a className="block text-base mb-2 text-gray-400">
						Syarat dan Ketentuan
					</a>
					<a className="block text-base mb-2 text-gray-400">
						Kebijakn dan Privasi
					</a>
					<a className="block text-base mb-2 text-gray-400">
						Bantuan
					</a>
					<a className="block text-base mb-2 text-gray-400">
						Hubungi Kami
					</a>
				</li>
				<li>
					<div>
						<span className="block text-dark-frost text-base tracking-wide font-bold uppercase">
							Pembayaran
						</span>
						<div className="grid grid-cols-4">
							<img
								style={{ width: "48px" }}
								src="https://www.gramedia.com/assets/bank/payment-mandiri.png"
							/>
							<img
								style={{ width: "48px" }}
								src="https://www.gramedia.com/assets/bank/payment-mandiri.png"
							/>
							<img
								style={{ width: "48px" }}
								src="https://www.gramedia.com/assets/bank/payment-mandiri.png"
							/>
							<img
								style={{ width: "48px" }}
								src="https://www.gramedia.com/assets/bank/payment-mandiri.png"
							/>
							<img
								style={{ width: "48px" }}
								src="https://www.gramedia.com/assets/bank/payment-mandiri.png"
							/>
							<img
								style={{ width: "48px" }}
								src="https://www.gramedia.com/assets/bank/payment-mandiri.png"
							/>
							<img
								style={{ width: "48px" }}
								src="https://www.gramedia.com/assets/bank/payment-mandiri.png"
							/>
							<img
								style={{ width: "48px" }}
								src="https://www.gramedia.com/assets/bank/payment-mandiri.png"
							/>
							<img
								style={{ width: "48px" }}
								src="https://www.gramedia.com/assets/bank/payment-mandiri.png"
							/>
							<img
								style={{ width: "48px" }}
								src="https://www.gramedia.com/assets/bank/payment-mandiri.png"
							/>
						</div>
					</div>
					<div>
						<span className="block text-dark-frost text-base tracking-wide font-bold uppercase">
							Pengiriman
						</span>
						<div className="grid grid-cols-4">
							<img
								style={{ width: "48px" }}
								src="https://www.gramedia.com/assets/shipping/shipping-kg-logistik.png"
							/>
							<img
								style={{ width: "48px" }}
								src="https://www.gramedia.com/assets/shipping/shipping-kg-logistik.png"
							/>
							<img
								style={{ width: "48px" }}
								src="https://www.gramedia.com/assets/shipping/shipping-kg-logistik.png"
							/>
						</div>
					</div>
				</li>
				<li>
					<span className="block mb-4 text-dark-frost text-base tracking-wide font-bold uppercase">
						Dapatkan Apps Kami
					</span>
					<a className="block text-base mb-2 text-gray-400">
						<img
							className="mb-2"
							src="https://www.gramedia.com/assets/play-store.png"
						/>
						<img src="https://www.gramedia.com/assets/app-store.png" />
					</a>
				</li>
			</ul>
		</div>
	);
}

export default FooterBottom;
