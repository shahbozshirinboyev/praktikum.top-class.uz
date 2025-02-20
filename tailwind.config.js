/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "0.5rem",
        sm: "0.5rem",
        lg: "0.7rem",
        xl: "1.5rem",
        "2xl": "1.5rem",
      },
    },
    extend: {},
  },
  plugins: [require('daisyui'),],
  daisyui: {
    darkTheme: false, // Disable dark mode - daisyUI - Tailwind CSS
  },
}