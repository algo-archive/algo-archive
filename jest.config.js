module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    "^.+\\.(js|jsx)?$": "babel-jest"
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "<rootDir>/__mocks__/fileMock.js"
  },
  transformIgnorePatterns: [
    "node_modules/(?!react-native|react-navigation)/"
  ]
};