/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  testEnvironment: 'node',
  transform: {
    '^.+.tsx?$': [
      'ts-jest',
      {
        isolatedModules: true, // No type-checking in tests
      },
    ],
  },
  verbose: true,
}
