/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,ts}'],
  theme: {
    extend: {
      colors: {
        background: '#131313',
        surface: '#131313',
        'surface-container-lowest': '#0e0e0e',
        'surface-container-low': '#1b1b1b',
        'surface-container': '#1f1f1f',
        'surface-container-high': '#2a2a2a',
        'surface-container-highest': '#353535',
        'on-surface': '#e2e2e2',
        'on-surface-variant': '#e6bcbd',
        primary: '#ffb3b5',
        'primary-container': '#ff5167',
        accent: '#ff2d55',
        muted: '#8E8E93',
        'level-1': '#1A1A1A',
        'level-2': '#2C2C2E'
      },
      spacing: {
        'margin-mobile': '20px',
        'gutter-list': '12px',
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      fontSize: {
        'display-lg': ['32px', { lineHeight: '40px', fontWeight: '700' }],
        'headline-md': ['24px', { lineHeight: '32px', fontWeight: '600' }],
        'title-sm': ['18px', { lineHeight: '24px', fontWeight: '600' }],
        'body-md': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '20px', fontWeight: '400' }],
        'label-caps': ['12px', { lineHeight: '16px', fontWeight: '600', letterSpacing: '0.05em' }]
      },
      boxShadow: {
        glow: '0 0 32px rgba(255, 45, 85, 0.4)',
        'glow-lg': '0 0 48px rgba(255, 45, 85, 0.45)'
      }
    }
  },
  plugins: []
}
