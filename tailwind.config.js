/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				lightBlue: "#3556AB",
				darkBlue: "#071D55",
				textGray: "#8D8D8D",
				red: "#AB3535",
				error: "#FF0000",
			},
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: ["light"],
	},
};
