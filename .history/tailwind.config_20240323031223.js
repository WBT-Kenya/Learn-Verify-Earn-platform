//
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

  theme: {
    extend: {},
  },
  // Add a new plugin for custom functionality
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
