import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import prettier from "eslint-plugin-prettier";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    files: ["**/*.{ts,tsx}"],
    plugins: {
      prettier: prettier,
    },
    rules: {
      "prettier/prettier": "error",
      "react-refresh/only-export-components": "off",
      "no-param-reassign": [
        "error",
        {
          props: false,
        },
      ],
      "import/consistent-type-specifier-style": ["error", "prefer-top-level"],
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
      "arrow-body-style": "off",
      "no-console": [
        "error",
        { allow: ["error", "warn", "info", "group", "groupEnd"] },
      ],
      "react/no-array-index-key": "off",
      "no-else-return": ["error", { allowElseIf: false }],
      curly: ["error", "multi"],
      eqeqeq: ["error", "always"],
      "no-case-declarations": "error",
      "import/no-anonymous-default-export": "off",
      "prefer-arrow-callback": ["error", { allowNamedFunctions: false }],
      "func-style": ["error", "declaration", { allowArrowFunctions: false }],
      "@typescript-eslint/prefer-function-type": "error",
    },
  },
];

export default eslintConfig;
