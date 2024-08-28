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
        "custom-radial":
          "radial-gradient(50% 50% at 50% 50%, #0C3747 0%, rgba(12, 55, 71, 0) 100%)",
      },
      fontFamily: {
        sofia: ["Sofia Pro", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
