import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                'alexandria': ['Alexandria', 'sans-serif'],
                'urbanist': ['Urbanist', 'sans-serif'],
                'manrope': ['Manrope', 'sans-serif'],
                'work-sans': ['Work Sans', 'sans-serif'],
            },
            colors: {
                // Primary Colors
                'primary-brown': 'var(--primary-brown)',
                'black': 'var(--black)',

                // Secondary Colors
                'secondary-brown': 'var(--secondary-brown)',
                'dark-gray': 'var(--dark-gray)',
                'light-cream': 'var(--light-cream)',
                'dark-gray-alt': 'var(--dark-gray-alt)',

                // Legacy Colors (keeping for compatibility)
                'background-brown': 'var(--background-brown)',
                'brown': 'var(--brown)',
                'text-primary': 'var(--text-primary)',
                'text-secondary': 'var(--text-secondary)',
                'text-muted': 'var(--text-muted)',
                'bg-primary': 'var(--bg-primary)',
                'bg-secondary': 'var(--bg-secondary)',
                'bg-tertiary': 'var(--bg-tertiary)',
                'bg-accent': 'var(--bg-accent)',
                'white-alt': 'var(--white-alt)',
            },
            animation: {
                'shake-up-down': 'shakeUpDown 0.4s ease-in-out infinite',
            },
            keyframes: {
                shakeUpDown: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-2px)' },
                }
            }
        },
    },
    plugins: [],
}

export default config 