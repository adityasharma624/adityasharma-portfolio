/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        dark: {
          900: '#0a0a0a',
          800: '#121212',
          700: '#1a1a1a',
        },
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        accent: {
          turquoise: '#40E0D0',
          orange: '#FF7F50',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'h1': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'h2': ['1.75rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'small': ['0.8125rem', { lineHeight: '1.5' }],
      },
      maxWidth: {
        'content': '800px',
      },
      spacing: {
        'section': '5rem',
        'section-lg': '8rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'slide-left': 'slideLeft 0.5s ease-out',
        'slide-right': 'slideRight 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')({
      className: 'prose',
      modifiers: ['sm', 'lg'],
      variants: ['dark'],
      styles: {
        DEFAULT: {
          color: '#374151',
          a: {
            color: '#0ea5e9',
            '&:hover': {
              color: '#0284c7',
            },
          },
          h1: {
            color: '#111827',
          },
          h2: {
            color: '#1f2937',
          },
          h3: {
            color: '#374151',
          },
          code: {
            color: '#0ea5e9',
            backgroundColor: '#f3f4f6',
            padding: '0.2em 0.4em',
            borderRadius: '0.25rem',
          },
          pre: {
            backgroundColor: '#f3f4f6',
            color: '#374151',
          },
        },
        dark: {
          color: '#d1d5db',
          a: {
            color: '#38bdf8',
            '&:hover': {
              color: '#7dd3fc',
            },
          },
          h1: {
            color: '#f3f4f6',
          },
          h2: {
            color: '#e5e7eb',
          },
          h3: {
            color: '#d1d5db',
          },
          code: {
            color: '#38bdf8',
            backgroundColor: '#1f2937',
          },
          pre: {
            backgroundColor: '#1f2937',
            color: '#d1d5db',
          },
        },
      },
    }),
  ],
} 