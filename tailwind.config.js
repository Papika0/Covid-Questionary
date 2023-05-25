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
        'my-button': '#208298',
        'my-black': '#232323',
      },
      fontFamily: {
        fontFamily: 'Anonymous Pro',
        contractica: ['TBC Contractica CAPS', 'sans-serif'],
      },
      textColor: {
        'primary': '#232323',
        'my-grey': '#626262',
        "my-blue": "#1289AE",
      },
      width: {
        '500': '500px',
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
      maxWidth: {
        '630': '630px',
      },
      lineHeight: {
        'header': '27px',
        "main": "77px",
      },
      letterSpacing: {
        'my-wide': '0.24em',
      },
      margin: {
        '370': '370px',
      },
    },
    plugins: [],
  }
}