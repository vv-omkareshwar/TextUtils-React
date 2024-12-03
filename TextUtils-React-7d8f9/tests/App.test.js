import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// Additional test cases can be added here to improve test coverage
test('renders TextForm component', () => {
  render(<App />);
  const textFormElement = screen.getByTestId('text-form');
  expect(textFormElement).toBeInTheDocument();
});

test('renders Navbar component', () => {
  render(<App />);
  const navbarElement = screen.getByRole('navigation');
  expect(navbarElement).toBeInTheDocument();
});