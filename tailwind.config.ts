
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				cyber: {
					'blue': '#0a192f',
					'dark': '#020c1b',
					'purple': '#8b5cf6',
					'teal': '#64ffda',
					'pink': '#f471b5',
					'slate': '#8892b0'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'pulse-slow': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' }
				},
				'glow': {
					'0%, 100%': { 
						textShadow: '0 0 15px rgba(100, 255, 218, 0.5), 0 0 10px rgba(100, 255, 218, 0.2)' 
					},
					'50%': { 
						textShadow: '0 0 20px rgba(100, 255, 218, 0.8), 0 0 15px rgba(100, 255, 218, 0.3)' 
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
				'glow': 'glow 3s ease-in-out infinite'
			},
			fontFamily: {
				'code': ['Source Code Pro', 'monospace'],
				'sans': ['Inter', 'sans-serif'],
				'display': ['Space Grotesk', 'sans-serif']
			},
			backgroundImage: {
				'cyber-grid': 'linear-gradient(rgba(10, 25, 47, 0.9) 1px, transparent 1px), linear-gradient(90deg, rgba(10, 25, 47, 0.9) 1px, transparent 1px)',
				'cta-gradient': 'linear-gradient(90deg, #8b5cf6, #f471b5)'
			},
			backgroundSize: {
				'cyber-grid-size': '35px 35px'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
