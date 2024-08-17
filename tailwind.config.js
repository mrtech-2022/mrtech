/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				textPrimary: '#ED334A',
				textSecondary: '#1778BC',
				bgBlue: '#00203F',
				darkBlue: '#050222'
			},
		},
	},
	daisyui: {
		themes: ['light'],
	},
	plugins: [require('daisyui')],
};
