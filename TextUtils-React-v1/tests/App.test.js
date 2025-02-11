import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../src/App';

// Wrap the App component with Router for testing
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

  test('renders Navbar component', () => {
    render(<AppWrapper />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  test('toggles theme modes', () => {
    render(<AppWrapper />);
    
    // Check initial mode (assuming it starts in light mode)
    expect(document.body).toHaveClass('bg-light');

    // Toggle to dark mode
    fireEvent.click(screen.getByText(/Dark Mode/i));
    expect(document.body).toHaveClass('bg-dark');

    // Toggle to purple mode
    fireEvent.click(screen.getByText(/Purple Mode/i));
    expect(document.body).toHaveStyle({ backgroundColor: '#4B0082' });

    // Toggle back to light mode
    fireEvent.click(screen.getByText(/Light Mode/i));
    expect(document.body).toHaveClass('bg-light');
  });

  test('renders TextForm on home route', () => {
    render(<AppWrapper />);
    expect(screen.getByText(/Enter text to analyze/i)).toBeInTheDocument();
  });

  test('navigates to About page', () => {
    render(<AppWrapper />);
    fireEvent.click(screen.getByText(/About/i));
    expect(screen.getByText(/About TextUtils/i)).toBeInTheDocument();
  });

  test('shows and hides alert', async () => {
    render(<AppWrapper />);
    
    // Trigger an action that should show an alert (e.g., copying text)
    const copyButton = screen.getByText(/Copy Text/i);
    fireEvent.click(copyButton);

    // Check if alert is shown
    expect(await screen.findByRole('alert')).toBeInTheDocument();

    // Wait for alert to disappear (assuming it disappears after 1.5 seconds)
    await new Promise((resolve) => setTimeout(resolve, 2000));
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });
});