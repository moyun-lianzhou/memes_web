module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.before-dot': {
          '@apply relative pl-6': '',
          '&::before': {
            content: '""',
            '@apply absolute left-0 top-1/2 -translate-y-1/2': '',
            '@apply w-2 h-2 rounded-full bg-blue-500': ''
          }
        }
      })
    }
  ],
}