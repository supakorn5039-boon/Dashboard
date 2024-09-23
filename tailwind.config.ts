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
        NeSky: "#C3EBFA",
        NeSkyLight: "#EDF9FD",
        NePurple: "#CFCEFF",
        NePurpleLight: "#F1F0FF",
        NeYellow: "#FAE27C",
        NeYellowLight: "#FEFCE8",
        NeLayout: "#F7F8FA",
      },
    },
  },
  plugins: [],
};
export default config;
