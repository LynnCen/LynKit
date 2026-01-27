/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./apps/playground/**/*.{js,ts,jsx,tsx}",
    "./apps/docs/src/**/*.{js,jsx,ts,tsx}",
    "./apps/docs/docs/**/*.{md,mdx}",
    "./packages/ui/src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1890ff',
        success: '#52c41a',
        warning: '#faad14',
        error: '#f5222d',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false, // 避免与组件库样式冲突
  },
} 