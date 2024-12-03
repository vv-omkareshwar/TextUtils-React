import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// Additional test cases can be added here to improve test coverage

// Example:
// test('toggles dark mode', () => {
//   render(<App />);
//   const darkModeToggle = screen.getByRole('button', { name: /toggle dark mode/i });
//   fireEvent.click(darkModeToggle);
//   expect(document.body.classList.contains('dark-mode')).toBe(true);
// });