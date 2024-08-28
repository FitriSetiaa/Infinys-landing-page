/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'custom-gray': 'rgb(252, 252, 252)', 
				'custom-deskripsi': 'hsl(222.4, 17.9%, 44.9%)', 
				'custom-text-deskripsi' : 'rgb(77, 90, 122)',
			  },
		},
	},
	plugins: [],
}
