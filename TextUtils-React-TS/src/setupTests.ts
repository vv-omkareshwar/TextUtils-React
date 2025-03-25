// src/setupTests.ts

// Importing the extended matchers from @testing-library/jest-dom
import '@testing-library/jest-dom';

// If you need to add more global setup or mocks, you can do so here
// For example:
// import { server } from './mocks/server';
// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());

// You can also add custom matchers or global test setup here if needed
// For example:
// expect.extend({
//   customMatcher(received, expected) {
//     // Custom matcher logic
//   },
// });

// If you need to set up global mocks, you can do so here
// For example:
// global.fetch = jest.fn();

// If you need to set up any global variables or configurations, you can do so here
// For example:
// global.myGlobalVariable = 'some value';

// Note: The @testing-library/jest-dom import adds custom jest matchers for asserting on DOM nodes.
// This allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// Learn more: https://github.com/testing-library/jest-dom