import '@testing-library/jest-dom';
import '@testing-library/react';

// Add any custom matchers
expect.extend({
  // Custom matchers can be added here
});

// Add any global mocks
global.fetch = jest.fn();

// TypeScript-specific configurations
declare global {
  namespace jest {
    interface Matchers<R> {
      // Add any custom matcher types here
    }
  }
}

// Suppress console.error and console.warn in tests
console.error = jest.fn();
console.warn = jest.fn();

// Cleanup after each test
afterEach(() => {
  jest.clearAllMocks();
});