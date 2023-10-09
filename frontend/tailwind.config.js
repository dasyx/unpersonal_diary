/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.astro",
    "./src/**/*.svelte",
    // Or if your scripts are in a different directory:
    // './scripts/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
