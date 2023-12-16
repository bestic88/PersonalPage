import {iconsPlugin} from "@egoist/tailwindcss-icons";

/** @type {import('tailwindcss').Config} */
const { iconsPlugin, getIconCollections } = require("@egoist/tailwindcss-icons")
export default {
  plugins: [require("daisyui"), iconsPlugin({
    // Select the icon collections you want to use
    // You can also ignore this option to automatically discover all icon collections you have installed
    //collections: getIconCollections(["mdi", "lucide"]),
  }),],
  content: [],
  theme: {
    container: {
      padding: {
        lg: '5rem',
      }
    }
  },
  daisyui: {
    themes: ["cmyk", "dark"],
  }
}

