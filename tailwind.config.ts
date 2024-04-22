import type { Config } from 'tailwindcss';

export default {
  important: true,
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('daisyui')],
} satisfies Config;
