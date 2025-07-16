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
                'primary-brown': 'var(--primary-brown)',
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
            }
        },
    },
    plugins: [],
}

export default config 