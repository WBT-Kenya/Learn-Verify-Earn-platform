//
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};


  // Add a new plugin for custom functionality
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
