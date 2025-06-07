/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
        colors: {
            primary: '#5DBE66',
        }
    },
  },
  plugins: [],
}
