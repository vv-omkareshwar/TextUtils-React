// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Additional setup for React testing
import '@testing-library/react';

// If you're using React 18's new root API, you might want to include this
import { configure } from '@testing-library/react';
import '@testing-library/user-event/setup';

// Configure testing-library
configure({ testIdAttribute: 'data-testid' });

// You can add more global test setup here if needed