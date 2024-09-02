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
			  keyframes: {
				flip: {
				  '0%, 100%': { transform: 'rotateY(0deg)' },
				  '50%': { transform: 'rotateY(180deg)' }
				}
			  },
			  animation: {
				'flip': 'flip 1.5s linear infinite',
        		'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        		'ping': 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
				'spin-slow': 'spin 3s linear infinite',
			  },
		},
	},
	plugins: [],
}
