// App.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../src/App';

// Wrap the App component with Router for testing
// This is necessary because the App component uses routing
const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

describe('App Component', () => {
  test('renders without crashing', () => {
    render(<AppWrapper />);
    expect(screen.getByText(/TextUtils/i)).toBeInTheDocument();
  });

  test('renders Navbar', () => {
    render(<AppWrapper />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  test('changes theme mode', () => {
    render(<AppWrapper />);
    const darkModeButton = screen.getByText(/Dark Mode/i);
    fireEvent.click(darkModeButton);
    expect(document.body.style.backgroundColor).toBe('rgb(33, 37, 41)');
  });

  test('shows alert', async () => {
    render(<AppWrapper />);
    const textArea = screen.getByRole('textbox');
    fireEvent.change(textArea, { target: { value: 'Test' } });
    const upperCaseButton = screen.getByText(/Convert to Uppercase/i);
    fireEvent.click(upperCaseButton);
    const alert = await screen.findByRole('alert');
    expect(alert).toBeInTheDocument();
  });

  test('navigates to About page', () => {
    render(<AppWrapper />);
    const aboutLink = screen.getByText(/About/i);
    fireEvent.click(aboutLink);
    expect(screen.getByText(/About Us/i)).toBeInTheDocument();
  });

  test('toggles between light and dark mode', () => {
    render(<AppWrapper />);
    const darkModeButton = screen.getByText(/Dark Mode/i);
    fireEvent.click(darkModeButton);
    expect(document.body.style.backgroundColor).toBe('rgb(33, 37, 41)');
    fireEvent.click(darkModeButton);
    expect(document.body.style.backgroundColor).toBe('white');
  });

  test('purple mode changes background color', () => {
    render(<AppWrapper />);
    const purpleModeButton = screen.getByText(/Purple Mode/i);
    fireEvent.click(purpleModeButton);
    expect(document.body.style.backgroundColor).toBe('rgb(106, 90, 205)');
  });

  test('alert disappears after a delay', async () => {
    jest.useFakeTimers();
    render(<AppWrapper />);
    const textArea = screen.getByRole('textbox');
    fireEvent.change(textArea, { target: { value: 'Test' } });
    const upperCaseButton = screen.getByText(/Convert to Uppercase/i);
    fireEvent.click(upperCaseButton);
    const alert = await screen.findByRole('alert');
    expect(alert).toBeInTheDocument();
    jest.advanceTimersByTime(1500);
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
    jest.useRealTimers();
  });

  test('converts text to uppercase', () => {
    render(<AppWrapper />);
    const textArea = screen.getByRole('textbox');
    fireEvent.change(textArea, { target: { value: 'hello world' } });
    const upperCaseButton = screen.getByText(/Convert to Uppercase/i);
    fireEvent.click(upperCaseButton);
    expect(textArea).toHaveValue('HELLO WORLD');
  });
});