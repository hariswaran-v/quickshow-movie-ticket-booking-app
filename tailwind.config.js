/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f84565",
        "primary-dull": "#d63854",
      },
    },
  },
  plugins: [],
};
