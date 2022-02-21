module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        myWhite: '#EAEAEA',
        myGrey: '#A8A8AD',
        myBlue: '141FAA',
        myBrown: '6E6674',
        bgBlue: 'A4ACDD',
        myLightBlue: '505DBD'
      },
      fontFamily: {
        roboto: ['Roboto']
      },
    },
  },
  plugins: [],
}