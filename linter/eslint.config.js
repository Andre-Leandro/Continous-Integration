const mainConfig = {
  files: ['**/*.js'], 
  ignores: ['cypress/**/*.js'], 
  languageOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    globals: {
      browser: true,
      es2021: true,
      document: 'readonly', 
      window: 'readonly',
      module: 'readonly',
      require: 'readonly'
    }
  },
  rules: {
    'no-unused-vars': 'warn',
    'no-console': 'off',
    'no-undef': 'error' 
  }
};

const testConfig = {
  files: ['test/**/*.js'], 
  languageOptions: {
    globals: {
      describe: 'readonly',
      it: 'readonly',
      expect: 'readonly'
    }
  }
};

module.exports = [
  mainConfig,
  testConfig
];