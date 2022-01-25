module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  options: {
    safelist: [
      /data-theme$/,
    ]
  },
  plugins: [
    require('daisyui'),
  ],
}