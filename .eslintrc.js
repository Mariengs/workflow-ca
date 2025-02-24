module.exports = {
  env: {
    jest: true, // Hvis du bruker Jest
    node: true, // For generell Node.js-støtte
  },
  extends: [
    "eslint:recommended",
    "plugin:jest/recommended", // Hvis du bruker Jest
  ],
  rules: {
    // Dine tilpassede regler her
  },
};
