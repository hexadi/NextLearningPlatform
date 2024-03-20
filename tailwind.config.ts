import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'big-stone': {
          '50': '#effaff',
          '100': '#def3ff',
          '200': '#b5ebff',
          '300': '#73ddff',
          '400': '#29ccff',
          '500': '#00b6fa',
          '600': '#0092d7',
          '700': '#0074ae',
          '800': '#00628f',
          '900': '#045176',
          '950': '#022437',
        },
        'dawn-pink': {
          '50': '#faf7f6',
          '100': '#f2e8e6',
          '200': '#eddedb',
          '300': '#dfc7c2',
          '400': '#cba59e',
          '500': '#b6867d',
          '600': '#a06c62',
          '700': '#855950',
          '800': '#6f4c45',
          '900': '#5f433d',
          '950': '#31211e',
        },
        'carrot-orange': {
          '50': '#fffaeb',
          '100': '#fdefc8',
          '200': '#fbde8c',
          '300': '#f9c750',
          '400': '#f8b027',
          '500': '#f29319',
          '600': '#d66909',
          '700': '#b1480c',
          '800': '#903810',
          '900': '#762e11',
          '950': '#441604',
        },
        'sundown': {
          '50': '#fef2f2',
          '100': '#ffe1e1',
          '200': '#ffc8c8',
          '300': '#ffb0b0',
          '400': '#fd6c6c',
          '500': '#f53e3e',
          '600': '#e22020',
          '700': '#be1717',
          '800': '#9d1717',
          '900': '#821a1a',
          '950': '#470808',
        },
      }
    },
  },
  plugins: [],
};
export default config;
