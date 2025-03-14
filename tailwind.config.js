/** @type {import('tailwindcss').Config} */
import { heroui } from '@heroui/react'
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}', // App Router
    './src/pages/**/*.{js,ts,jsx,tsx}', // Pages Router
    './src/components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [heroui()],
}
