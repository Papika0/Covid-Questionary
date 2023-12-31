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
      maxHeight: {
        '781': '781px',
      },
      spacing: {
        '1': '1px',
        '2': '2px',
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
      animation: {
        'slide-in': 'slide-in 1s ease-out forwards 500ms',
        'shrink': 'shrink 300ms ease-in-out forwards',
        'shrink-little': 'shrink-little 300ms ease-in-out forwards',
        'opacity': 'opacity 1s ease-in-out forwards',
        'pop-up': 'pop-up 300ms ease-in-out forwards 1s',
        'pop-up-down': 'pop-up-down 300ms ease-in-out forwards 1s',
        'slide': 'slide 400ms ease-in-out forwards',
      },
      dropShadow: {
        'my-shadow': '0 1px 1px rgba(35,35,35,1)',
      },
    },
    plugins: [],
  }
}