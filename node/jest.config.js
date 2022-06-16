
const config = {
    verbose: true,
    clearMocks: true,
    moduleFileExtensions: ['js', 'ts'],
    roots: [
        "<rootDir>/src",
    ],
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    modulePaths: ['<rootDir>'],
    setupFiles: [
        '<rootDir>/jest-setup.js'
    ],
    preset: 'ts-jest',
    testEnvironment: "node",
    "moduleNameMapper": {
        '^~/(.*)$': '<rootDir>/src/$1',
    },
    testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'],
};


module.exports = config;
