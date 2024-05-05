/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ['var(--font-saira)']
      },
      backgroundImage:{
        'paralax': 'url("../public/images/bg2.webp")',
        'paralaxwhite': 'url("../public/images/babilonico.webp")',
        'logo': 'url("../public/images/logo1.webp")',
        'teste1': 'url("../public/images/mulher.webp")',
        'teste2': 'url("../public/images/homem.webp")',
        'teste3': 'url("../public/images/homem2.webp")'
      }
    },
  },
  plugins: [],
}