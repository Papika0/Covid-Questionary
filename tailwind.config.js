/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#EAEAEA',
      },
      fontFamily: { fontFamily: 'Anonymous Pro' },
      textColor: {
        'primary': '#232323',
        'my-grey': '#626262',
      },
      width: {
        '500' : '500px',
      },
      borderWidth: {
        '0.8': '0.8px',
      },
      borderColor: {
        'primary': '#232323',
      },
      fontSize: {
        header: '22px',
      },
      accentColor: {
        'primary': '#232323',
      },
    },
    plugins: [],
  }
}