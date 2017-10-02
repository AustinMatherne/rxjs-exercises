module.exports = (wallaby) => {
  return {
    compilers: {
      '**/*.ts': wallaby.compilers.typeScript({
        module: 'commonjs',
      }),
    },
    env: {
      type: 'node',
    },
    files: [
      'src/**/*.ts',
      '!src/**/*.test.ts',
    ],
    tests: [
      'src/**/*.test.ts',
    ],
    testFramework: 'mocha',
  };
};
