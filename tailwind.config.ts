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
        "custom-gradient":
          "linear-gradient(232.12deg, #8C57EA 27.15%, #5570E8 65.23%)",
        "custom-gradient1":
          "linear-gradient(180deg, rgba(140, 87, 234, 0.04) 0%, rgba(85, 112, 232, 0.04) 100%)",
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
