module.exports = {
    globals: {
        innerWidth: true,
        ResizeObserver: true,
        IntersectionObserver: true
    },
    collectCoverage: true,
    testURL: 'http://localhost/',
    collectCoverageFrom: ['pattern/**/*.{js,jsx,ts,tsx}', '!pattern/utils/**/*.{js,jsx,ts,tsx}'],
    coverageDirectory: '.jest_coverage/',
    coverageReporters: ['json', 'lcov', 'text', 'clover'],
    moduleFileExtensions: ['js', 'jsx', 'es6', 'ts', 'tsx'],
    moduleNameMapper: {
        '^.+\\.(css|less|scss)$': 'babel-jest',
        '@/(.*)$': '<rootDir>/./pattern/$1'
    },
    transform: {
        '^.+\\.js$': 'babel-jest',
        '^.+\\.jsx$': 'babel-jest',
        '^.+\\.ts$': 'ts-jest',
        '^.+\\.tsx$': 'ts-jest',
        '^.+\\.es6$': 'babel-jest'
    },
    transformIgnorePatterns: ['node_modules/'],
    snapshotSerializers: ['enzyme-to-json/serializer'],
    setupFilesAfterEnv: ['jest-canvas-mock']
};
