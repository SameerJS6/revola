import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const eslintConfig = [
  {
    ignores: [".source/**"],
  },
  ...nextCoreWebVitals,
  ...nextTypescript,
  {
    // New React Compiler rules from eslint-plugin-react-hooks v7; warn until the Base UI rebuild addresses them
    rules: {
      "react-hooks/refs": "warn",
      "react-hooks/set-state-in-effect": "warn",
    },
  },
];

export default eslintConfig;
