/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        surface: '#f7faf8',
        surface2: '#eef6f1',
        cardalt: '#f0faf4',
        border: '#d4e8da',
        borderdark: '#a8d4b8',
        accent: '#166534',
        accentmid: '#16a34a',
        accentlite: '#22c55e',
        accentbg: '#dcfce7',
        text: '#0f172a',
        textsec: '#374151',
        dim: '#6b7280',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        sm2: '0 1px 3px rgba(0,0,0,.08), 0 1px 2px rgba(0,0,0,.06)',
        md2: '0 4px 16px rgba(0,0,0,.10), 0 2px 6px rgba(0,0,0,.06)',
        lg2: '0 12px 40px rgba(0,0,0,.12), 0 4px 12px rgba(0,0,0,.06)',
        green: '0 8px 28px rgba(22,101,52,.18)',
      },
      keyframes: {
        slideUp: { from: { transform: 'translateY(110%)' }, to: { transform: 'translateY(0)' } },
        fadeIn: { from: { opacity: 0 }, to: { opacity: 1 } },
        spinSlow: { from: { transform: 'rotate(0)' }, to: { transform: 'rotate(360deg)' } },
        orbPulse: {
          '0%,100%': { boxShadow: '0 4px 16px rgba(0,0,0,.10), 0 2px 6px rgba(0,0,0,.06)' },
          '50%': { boxShadow: '0 0 0 14px rgba(22,197,94,.06), 0 4px 16px rgba(0,0,0,.10), 0 2px 6px rgba(0,0,0,.06)' },
        },
        wave: { '0%,100%': { transform: 'scaleY(1)' }, '50%': { transform: 'scaleY(.28)' } },
        floatGlow: {
          '0%,100%': { opacity: 0, transform: 'translateY(0) scale(1)' },
          '50%': { opacity: 0.35, transform: 'translateY(-18px) scale(1.6)' },
        },
      },
      animation: {
        slideUp: 'slideUp .8s cubic-bezier(.22,1,.36,1) both',
        fadeIn: 'fadeIn .8s cubic-bezier(.22,1,.36,1) both',
        spinSlow: 'spinSlow 14s linear infinite',
        spinSlowRev: 'spinSlow 22s linear infinite reverse',
        orbPulse: 'orbPulse 5s ease-in-out infinite',
        wave: 'wave 1.2s ease-in-out infinite',
        floatGlow: 'floatGlow 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
