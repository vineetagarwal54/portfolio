/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode via class
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff9800', // Orange for your brand
        background: {
          DEFAULT: '#f8fafc', // Light mode background
          dark: '#18181b',   // Dark mode background
        },
        text: {
          DEFAULT: '#18181b', // Light mode text
          dark: '#f3f4f6',   // Dark mode text
        },
        accent: {
          DEFAULT: '#2563eb', // Subtle blue accent
          dark: '#60a5fa',   // Lighter blue for dark mode
        },
      },
    },
  },
  safelist: [
    'dark',
    'bg-background',
    'bg-background-dark',
    'text-text',
    'text-text-dark',
    'text-primary',
    'bg-primary',
    'border-primary',
    'bg-accent',
    'bg-accent-dark',
  ],
  plugins: [],
}; 