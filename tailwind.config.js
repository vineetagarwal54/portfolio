// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['selector', '[data-theme="dark"]'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        fg: 'var(--fg)',
        card: 'var(--card)',
        muted: 'var(--muted)',
        border: 'var(--border)',
        accent: 'var(--accent)',
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