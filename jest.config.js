/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|css|scss|sass)$":
      "<rootDir>/tests/fileMock.js",
  },
  roots: ["src", "tests"],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  testMatch: [
    "**/tests/**/*.test.jsx",
    "**/tests/**/*.test.js",
    "**/src/**/*.test.jsx",
    "**/src/**/*.test.js",
  ],
};
