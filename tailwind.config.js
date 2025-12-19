// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['selector', '[data-theme="dark"]'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg-primary)',
        'bg-alt': 'var(--bg-primary-alt)',
        fg: 'var(--fg-primary)',
        'fg-secondary': 'var(--fg-secondary)',
        secondary: 'var(--bg-secondary)',
        'secondary-alt': 'var(--bg-secondary-alt)',
        card: 'var(--bg-secondary)',
        muted: 'var(--fg-secondary)',
        border: 'var(--border)',
        accent: 'var(--accent)',
        'accent-secondary': 'var(--accent-secondary)',
        'accent-foreground': 'var(--accent-foreground)',
        'accent-hover': 'var(--accent-hover)',
        'accent-ring': 'var(--accent-ring)',
      },
      borderRadius: { xl: 'var(--radius)' },
      boxShadow: { 
        soft: '0 8px 24px rgba(0,0,0,0.08)',
        'accent-ring': '0 0 0 3px var(--accent-ring)',
      },
    },
  },
  plugins: [],
}

// --- IGNORE --- 