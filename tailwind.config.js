/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
      },
      colors: {
        primary: '#000000',    /* Pure Black */
        secondary: '#1A1A1A',  /* Dark Gray */
        accent: '#404040',     /* Medium Gray - Complementary accent */
        light: '#FFFFFF',      /* White */
      },
      backgroundColor: {
        background: 'var(--color-background)',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
        heading: ['Syncopate', 'sans-serif'],
      },
      fontSize: {
        '2xl': ['1.5rem', { lineHeight: '2rem', letterSpacing: '0.02em' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem', letterSpacing: '0.03em' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '0.04em' }],
        '5xl': ['3rem', { lineHeight: '1', letterSpacing: '0.05em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
};