/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				background: "#1d2021",
				light: "#ebdbb2",
				dark: {
					DEFAULT: "#1d2021", // background
					100: "#32302f", // hover
					200: "#3c3836", // border
					300: "#504945",
					400: "#665c54",
					500: "#7c6f64",
					600: "#928374", // ingnored
					700: "#a89984",
					800: "#bdae93",
					900: "#d5c4a1",
				},
				green: {
					DEFAULT: "#83a598", // modified
					100: "#a3be8c",
					200: "#b8bb26", // added
				},
				red: {
					DEFAULT: "#fb4934", // deleted
				},
				yellow: {
					DEFAULT: "#fabd2f", // warning
				},
				blue: {
					DEFAULT: "#56b6c2",
				},
				purple: {
					DEFAULT: "#c678dd",
				},
			},
		},
	},
	plugins: [],
}
