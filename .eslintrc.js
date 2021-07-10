module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/essential",
    "@vue/airbnb",
  ],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "indent": ["error", 4, { "SwitchCase": 1 }],
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "max-len": "off",
    "import/no-extraneous-dependencies": "off",
    "quotes": ["error", "double"],
    "comma-dangle": "off",
    "no-unused-vars": "warn",
    "object-curly-newline": ["error", { "ImportDeclaration": "never" }]
  },
};
