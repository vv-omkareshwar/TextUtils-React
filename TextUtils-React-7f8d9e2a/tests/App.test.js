import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../src/App';

// Mock child components
jest.mock('../src/components/Navbar', () => ({ toggleMode }) => (
  <div data-testid="mock-navbar">
    <button onClick={() => toggleMode('dark')}>Toggle Dark</button>
    <button onClick={() => toggleMode('purple')}>Toggle Purple</button>
  </div>
));
jest.mock('../src/components/Alert', () => ({ alert }) => <div data-testid="mock-alert">{alert?.msg}</div>);
jest.mock('../src/components/About', () => () => <div data-testid="mock-about">About</div>);
jest.mock('../src/components/TextForm', () => ({ showAlert }) => (
  <div data-testid="mock-textform">
    <button onClick={() => showAlert('This is a test alert', 'success')}>Show Alert</button>
  </div>
));

describe('App Component', () => {
  test('renders without crashing', () => {
    render(
      <Router>
        <App />
      </Router>
    );
    expect(screen.getByTestId('mock-navbar')).toBeInTheDocument();
  });

  test('toggles between light, dark, and purple modes', () => {
    render(
      <Router>
        <App />
      </Router>
    );
    
    // Initial mode should be light
    expect(document.body.style.backgroundColor).toBe('white');
    
    // Toggle to dark mode
    fireEvent.click(screen.getByText('Toggle Dark'));
    expect(document.body.style.backgroundColor).toBe('rgb(33, 37, 41)');
    
    // Toggle to purple mode
    fireEvent.click(screen.getByText('Toggle Purple'));
    expect(document.body.style.backgroundColor).toBe('rgb(106, 90, 205)');
    
    // Toggle back to light mode
    fireEvent.click(screen.getByText('Toggle Dark'));
    expect(document.body.style.backgroundColor).toBe('white');
  });

  test('shows and hides alert', async () => {
    jest.useFakeTimers();
    
    render(
      <Router>
        <App />
      </Router>
    );
    
    // Initially, no alert should be present
    expect(screen.queryByTestId('mock-alert')).toBeNull();
    
    // Trigger an action that shows an alert
    fireEvent.click(screen.getByText('Show Alert'));
    
    // Alert should now be visible
    expect(screen.getByTestId('mock-alert')).toBeInTheDocument();
    expect(screen.getByTestId('mock-alert')).toHaveTextContent('This is a test alert');
    
    // Fast-forward time
    act(() => {
      jest.advanceTimersByTime(2000);
    });
    
    // Alert should disappear after some time
    expect(screen.queryByTestId('mock-alert')).toBeNull();
    
    jest.useRealTimers();
  });

  test('renders correct route components', () => {
    render(
      <Router>
        <App />
      </Router>
    );
    
    // Home route (TextForm) should be rendered by default
    expect(screen.getByTestId('mock-textform')).toBeInTheDocument();
    
    // Navigate to About page
    fireEvent.click(screen.getByText('About'));
    expect(screen.getByTestId('mock-about')).toBeInTheDocument();
  });
});