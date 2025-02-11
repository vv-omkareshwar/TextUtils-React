import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../src/App';

console.log('React:', React);
console.log('render:', render);
console.log('App:', App);

const AppWrapper = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

describe('App Component', () => {
  test('renders without crashing', () => {
    render(<AppWrapper />);
    expect(screen.getByText(/TextUtils/i)).toBeInTheDocument();
  });

  test('always renders Navbar with correct links', () => {
    render(<AppWrapper />);
    const navbar = screen.getByRole('navigation');
    expect(navbar).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument();
  });

  test('renders TextForm on home route', () => {
    render(<AppWrapper />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByText(/Enter text to analyze/i)).toBeInTheDocument();
  });

  test('renders About component on /about route', () => {
    window.history.pushState({}, '', '/about');
    render(<AppWrapper />);
    expect(screen.getByText(/About TextUtils/i)).toBeInTheDocument();
  });

  test('toggles between light, dark, and purple modes', () => {
    render(<AppWrapper />);
    const modeToggles = screen.getAllByRole('button', { name: /mode/i });
    
    // Check initial mode (assuming it starts in light mode)
    expect(document.body.dataset.mode).toBe('light');
    
    // Toggle to dark mode
    fireEvent.click(modeToggles.find(button => button.textContent.includes('Dark')));
    expect(document.body.dataset.mode).toBe('dark');
    
    // Toggle to purple mode
    fireEvent.click(modeToggles.find(button => button.textContent.includes('Purple')));
    expect(document.body.dataset.mode).toBe('purple');
    
    // Toggle back to light mode
    fireEvent.click(modeToggles.find(button => button.textContent.includes('Light')));
    expect(document.body.dataset.mode).toBe('light');
  });

  test('displays and dismisses alert', () => {
    const { rerender } = render(<AppWrapper />);
    
    // Initially, no alert should be present
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
    
    // Rerender with an alert (simulating an action that would trigger an alert)
    rerender(<AppWrapper showAlert={true} alertMessage="Test alert" alertType="success" />);
    const alert = screen.getByRole('alert');
    expect(alert).toBeInTheDocument();
    expect(alert).toHaveTextContent('Test alert');
    expect(alert).toHaveClass('alert-success');
    
    // Simulate alert dismissal (assuming there's a close button)
    const closeButton = screen.getByRole('button', { name: /close/i });
    fireEvent.click(closeButton);
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });
});