/** @type {import('tailwindcss').Config} */
// const plugin = require('tailwindcss/plugin');

import plugin from 'tailwindcss/plugin';
import { successAlert, loadingAlert, errorAlert } from './src/utils/styles/alerts';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function({ addComponents}) {
      addComponents({
        '.alert-success': successAlert,
        '.alert-loading': loadingAlert,
        '.alert-error': errorAlert,
      })
    })
  ],
}