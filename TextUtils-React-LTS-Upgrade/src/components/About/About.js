// .eslintrc.js

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  settings: {
    react: {
      version: '18.x', // Adjust this based on your React version
    },
  },
  rules: {
    // Add any specific rules here
  },
};

// package.json (partial)

{
  "scripts": {
    "lint": "eslint src/**/*.js src/**/*.jsx"
  },
  "devDependencies": {
    "eslint": "^8.38.0",
    "eslint-plugin-react": "^7.32.2",
    "eslint-plugin-react-hooks": "^4.6.0"
  }
}

// Commands to run in terminal:
// npm install
// npx eslint src/components/About/About.js