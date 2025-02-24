import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "everforest-green": {
          normal: "#a6bf7f",
          dim: "#869a66",
          bright: "#c2e092",
        },
        "everforest-fg": {
          normal: "#b3a891",
          dim: "#99907c",
          bright: "#d1c5a9",
        },
        "everforest-bg": {
          normal: "#293236"
        }
      },
    },
  },
  plugins: [],
};

export default config;
