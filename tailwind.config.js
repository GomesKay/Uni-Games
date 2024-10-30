/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	colors: {
  		'black': '#000000',
  		'blue-100': '#BED5F7',
  		'gray-400': '#8D8D99',
  		'gray-500': '#60606C',
  		'zinc-900': '#18181B',
  		'green-400': '#4ADE80',
  		'green-500': '#22C55E',
  		'red-400': '#EF4444',
  		'white': '#FFFFFF'
  	},
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	},
  	fontFamily: {
  		'sans': ["Archivo Narrow", "serif"],
  		'serif': ["Bebas Neue", "serif"]
  	},
		screens: {
      sm: { max: "320px"},
      md: { max: "375px", min: "321px" },
      lg: { max: "425px", min: "376px"},
      xl: { max: "768px", min: "426px"},
      xxl: { max: "1024px", min: "769px" },
			exl: { max: "1440px", min: "1025px" },
			exxl: { max: "2564px", min: "1441px" }
    }
  },
  plugins: [require("tailwindcss-animate")],
}

