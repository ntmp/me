module.exports = {
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    '@testing-library/react/cleanup-after-each',
  ],
  globals: { __PATH_PREFIX__: ''  },
  testURL: 'http://localhost',
  transform: { '^.+\\.tsx?$': 'ts-jest'  },
  transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
  testRegex: '(/src/.*|)\\.spec\\.(ts|tsx)$',
  testPathIgnorePatterns: [
    'node_modules',
    '.cache',
  ],
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
  ],
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/components/**/*.tsx'],
  coverageReporters: [
    'lcov',
    'text',
    'html',
  ],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/config/jest/mock/file.ts",
    "\\.(css|less)$": "<rootDir>/config/jest/mock/style.ts",
    "^~src/(.*)$": "<rootDir>/src/$1",
    "^~assets/(.*)$": "<rootDir>/src/assets/$1",
    "^~components/(.*)$": "<rootDir>/src/components/$1",
    "^~templates/(.*)$": "<rootDir>/src/templates/$1",
    "^~layouts/(.*)$": "<rootDir>/src/layouts/$1",
    "^~pages/(.*)$": "<rootDir>/src/pages/$1",
    "^~hooks/(.*)$": "<rootDir>/src/hooks/$1",
    "^~types/(.*)$": "<rootDir>/src/types/$1",
  },
};