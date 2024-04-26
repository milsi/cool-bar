import type { Config } from 'tailwindcss';

export default {
  important: true,
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#cbf83e',
          'primary-content': '#111827',
          secondary: '#0000ff',
          'secondary-content': '#dbeafe',
          accent: '#facc15',
          'accent-content': '#111827',
          neutral: '#f3f4f6',
          'neutral-content': '#111827',
          'base-100': '#e5e7eb',
          'base-200': '#c7c9cc',
          'base-300': '#aaabae',
          'base-content': '#121313',
          info: '#0ea5e9',
          'info-content': '#030e16',
          success: '#95ca00',
          'success-content': '#080f00',
          warning: '#ffb500',
          'warning-content': '#160c00',
          error: '#ef4444',
          'error-content': '#160909',
        },
      },
    ],
  },
} satisfies Config;
