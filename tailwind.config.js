/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./demo/**/*.{js,ts,jsx,tsx}",
    "./docs/src/**/*.{js,jsx,ts,tsx}",
    "./docs/docs/**/*.{md,mdx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false, // 避免与 Docusaurus 样式冲突
  },
} 