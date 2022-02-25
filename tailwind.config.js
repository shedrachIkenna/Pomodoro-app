module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        myWhite: '#fafafa',
        myGrey: '#f1f1f1',
        myBlue: '#141FAA',
        myBrown: '#6E6674',
        bgBlue: '#A4ACDD',
        myLightBlue: '#505DBD',
        myDarkGrey: '#e8e8e8'
      },
      fontFamily: {
        roboto: ['Roboto']
      },
    },
  },
  plugins: [],
}