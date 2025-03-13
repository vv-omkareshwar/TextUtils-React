import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../src/App';

// Mock the Alert component
jest.mock('../src/components/Alert', () => {
  return function DummyAlert({ alert }: { alert: { msg: string; type: string } | null }) {
    return alert ? <div data-testid="alert">{alert.msg}</div> : null;
  };
});

// Wrapper component to provide routing context
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

  test('toggles theme correctly', () => {
    render(<AppWrapper />);
    const toggleDarkBtn = screen.getByText(/Enable Dark Mode/i);
    fireEvent.click(toggleDarkBtn);
    expect(document.body.style.backgroundColor).toBe('rgb(33, 37, 41)');
    
    const toggleLightBtn = screen.getByText(/Enable Light Mode/i);
    fireEvent.click(toggleLightBtn);
    expect(document.body.style.backgroundColor).toBe('white');
  });

  test('toggles to purple theme correctly', () => {
    render(<AppWrapper />);
    const togglePurpleBtn = screen.getByText(/Enable Purple Mode/i);
    fireEvent.click(togglePurpleBtn);
    expect(document.body.style.backgroundColor).toBe('rgb(106, 90, 205)');
  });

  test('displays alert when shown', async () => {
    render(<AppWrapper />);
    const textArea = screen.getByRole('textbox');
    fireEvent.change(textArea, { target: { value: 'Hello, World!' } });
    const upperCaseBtn = screen.getByText(/Convert to Uppercase/i);
    fireEvent.click(upperCaseBtn);
    
    const alert = await screen.findByTestId('alert');
    expect(alert).toBeInTheDocument();
    expect(alert).toHaveTextContent('Converted to uppercase!');
  });

  test('dismisses alert after a timeout', async () => {
    jest.useFakeTimers();
    render(<AppWrapper />);
    const textArea = screen.getByRole('textbox');
    fireEvent.change(textArea, { target: { value: 'Hello, World!' } });
    const upperCaseBtn = screen.getByText(/Convert to Uppercase/i);
    fireEvent.click(upperCaseBtn);
    
    const alert = await screen.findByTestId('alert');
    expect(alert).toBeInTheDocument();
    
    jest.advanceTimersByTime(1500);
    expect(screen.queryByTestId('alert')).not.toBeInTheDocument();
    jest.useRealTimers();
  });

  test('renders TextForm on home route', () => {
    render(<AppWrapper />);
    expect(screen.getByText(/Enter the text to analyze below/i)).toBeInTheDocument();
  });

  test('renders About component on /about route', () => {
    window.history.pushState({}, '', '/about');
    render(<AppWrapper />);
    expect(screen.getByText(/About Us/i)).toBeInTheDocument();
  });

  test('renders Not Found for invalid routes', () => {
    window.history.pushState({}, '', '/invalid-route');
    render(<AppWrapper />);
    expect(screen.getByText(/404 Not Found/i)).toBeInTheDocument();
  });

  test('Navbar is always rendered', () => {
    render(<AppWrapper />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });
});