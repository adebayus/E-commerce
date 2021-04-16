import React, { useState, useEffect } from "react";
import Card from "../card/Card";
import Slider from "../slider/Slider";

function Flashsales() {
	const [state, setstate] = useState({
		time: {
			h: "",
			m: "",
			s: "",
		},
		seconds: 7200,
	});

	function secondToTimes(sec) {
		// hour
		const hour = Math.floor(sec / 3600).toLocaleString("en-US", {
			minimumIntegerDigits: 2,
			useGrouping: false,
		});
		// minute
		const get_sec_minute = sec % 3600;
		const minute = Math.floor(get_sec_minute / 60).toLocaleString("en-US", {
			minimumIntegerDigits: 2,
			useGrouping: false,
		});
		// second
		const get_sec = get_sec_minute % 60;
		const second = Math.ceil(get_sec).toLocaleString("en-US", {
			minimumIntegerDigits: 2,
			useGrouping: false,
		});

		return { h: hour, m: minute, s: second };
	}

	useEffect(() => {
		// console.log(state, "diluar interval");
		const interval = setInterval(() => {
			const duplicate = { ...state };
			let sec = duplicate.seconds - 1;
			let sToTimes = secondToTimes(sec);
			// console.log(sToTimes);
			setstate({ ...state, time: sToTimes, seconds: state.seconds - 1 });
			// console.log(state, "didalam interval");
		}, 1000);
		return () => {
			// console.log("ASdasd");
			clearInterval(interval);
		};
	}, [state.seconds]);

	return (
		<React.Fragment>
			<div className="flex my-6 items-center justify-between">
				<div className="flex items-center">
					<h1 className="font-semibold mr-4 text-dark-frost text-2xl">
						Flash Sales
					</h1>
					<div className="flex gap-1">
						<div className="w-10 h-10 rounded text-lg bg-dark-frost border-2 border-fros flex items-center justify-center  text-white font-bold">
							<span>{state.time.h}</span>
						</div>
						<div className="w-10 h-10 rounded text-lg bg-dark-frost border-2 border-fros flex items-center justify-center  text-white font-bold">
							<span>{state.time.m}</span>
						</div>
						<div className="w-10 h-10 rounded text-lg bg-dark-frost border-2 border-fros flex items-center justify-center  text-white font-bold">
							<span>{state.time.s}</span>
						</div>
					</div>
				</div>
				<span className="text-hot-pink font-bold text-right cursor-pointer">
					<a> Lihat Semua </a>
				</span>
			</div>
			<div className="rounded-md bg-flashsale-pattern bg-cover bg-center bg-no-repeat grid gap-2 grid-cols-4 p-4">
				<div className="px-5">
					<h2
						style={{ height: "90%" }}
						className="text-8xl font-Dancing font-bold text-dark-frost justify-center flex items-center"
					>
						Flash Sales
					</h2>
					<div
						style={{ height: "10%" }}
						className="w-full flex items-center justify-center bg-hot-pink p-5"
					>
						<a className="text-white text-2xl tracking-wider cursor-pointer">
							Lihat Semua
						</a>
					</div>
				</div>
				<div className="col-start-2 col-end-5">
					<Slider type="multiple" numberShow={4}>
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
					</Slider>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Flashsales;
