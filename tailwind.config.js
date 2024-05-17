/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        arges: ["Arges", "sans-serif"],
        platypi: ["Platypi", "sans-serif"],
        sedan: ["Sedan", "serif"],
        prata: ["Prata", "serif"],
        lora: ["Lora", "serif"],
      },
    },
  },
  plugins: [],
};
