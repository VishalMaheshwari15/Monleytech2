module.exports = {
       content: ['./src/**/*.{js,jsx,ts,tsx}'],
       theme: {
         extend: {
           colors: {
             primary: '#00FF9C',
             secondary: '#3F00F9',
           },
           boxShadow: {
             neon: '0 0 15px rgba(0, 255, 156, 0.5)',
           },
           animation: {
             float: 'float 3s ease-in-out infinite',
             glow: 'glow 2s ease-in-out infinite',
           },
           keyframes: {
             float: {
               '0%, 100%': { transform: 'translateY(0)' },
               '50%': { transform: 'translateY(-10px)' },
             },
             glow: {
               '0%, 100%': { boxShadow: '0 0 15px rgba(0, 255, 156, 0.5)' },
               '50%': { boxShadow: '0 0 25px rgba(0, 255, 156, 0.7)' },
             },
           },
           fontFamily: {
             inter: ['Inter', 'sans-serif'],
           },
         },
       },
       darkMode: 'class',
       plugins: [require('@tailwindcss/forms')],
     };