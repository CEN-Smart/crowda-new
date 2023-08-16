import type { Config } from 'tailwindcss'
import tailwindcssPlugins from 'tailwindcss/plugin'
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow:{
        primary: '0 15px 35px rgba(0 0 0/.15)'
      }
     
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }
}
export default config
