// import daisyui from 'daisyui'
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        container: {
            center: true,
            padding: '16px',
        },
        extend: {
            colors: {
                primary: '#810000',
                secondary: '#EEEBDD',
                dark: '#1B1717'
            },
            gridTemplateColumns: {
                'auto-1fr': 'auto 1fr',
              },
            screens: {
                '2xl': '1320px'
            }
        },
    },
    plugins: [
        'daisyui',
      ],
}


