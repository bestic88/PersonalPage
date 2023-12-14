/** @type {import('tailwindcss').Config} */
export default {
  plugins: [require("daisyui")],
  content: [],
  theme: {
    container: {
      padding: {
        lg: '5rem',
      }
    }
  },
  daisyui: {
    themes: ["light", "dark"],
  }
}

