module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		screens: {
			sm: "640px",
			// => @media (min-width: 640px) { ... }

			md: "768px",
			// => @media (min-width: 768px) { ... }

			lg: "1024px",
			// => @media (min-width: 1024px) { ... }
		},
		extend: {
			colors: {
				frost: "#7C99B4",
				"dark-frost": "#52718E",
				"hot-pink": "#F652A0",
			},
			fontFamily: {
				trainOne: '"Train One"',
				libre: '"Libre Franklin"',
<<<<<<< HEAD
				Lato: '"Lato',
=======
				Lato: '"Lato"',
>>>>>>> 3d70c9933615f846cdfcb7097ae4ae5c8956a5cb
				Dancing: '"Dancing Script"',
			},
			backgroundImage: (theme) => ({
				...theme,
				"flashsale-pattern":
					"url('https://img.freepik.com/free-vector/abstract-flat-colorful-geometric-shapes-background_144290-24.jpg?size=626&ext=jpg')",
			}),
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require("@tailwindcss/line-clamp")],
};
