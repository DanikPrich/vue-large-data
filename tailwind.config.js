/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(26 86 219)',
        black: '#020617',
        white: '#FFFFFF',

        'gray-light': '#F1F5F9',
        gray: '#dce1e8',
        'gray-dark': '#64748B',
        green: '#16A34A',
        orange: '#F97316',
        red: '#EF4444',
      },
    },
  },
  plugins: [],
}
