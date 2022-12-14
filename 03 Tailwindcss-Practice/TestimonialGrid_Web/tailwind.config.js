module.exports = {
  content: ['./*.html'],
  screens: {
    sm:'480px',
    md:'768px',
    lg:'976px',
    sm:'1440px',
  },
  theme: {
    extend: {
      fontFamily: ['Barlow Semi Condensed', 'sans-serif'],
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
