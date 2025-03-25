import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../src/App';

// Wrapper component to provide Router context
const AppWrapper: React.FC = () => (
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

  test('renders TextForm component on home route', () => {
    render(<AppWrapper />);
    expect(screen.getByText(/Enter the text to analyze below/i)).toBeInTheDocument();
  });

  test('switches to dark mode when toggle is clicked', () => {
    render(<AppWrapper />);
    const darkModeToggle = screen.getByRole('button', { name: /dark mode/i });
    fireEvent.click(darkModeToggle);
    expect(document.body).toHaveClass('bg-dark');
  });

  test('switches to purple mode when toggle is clicked', () => {
    render(<AppWrapper />);
    const purpleModeToggle = screen.getByRole('button', { name: /purple mode/i });
    fireEvent.click(purpleModeToggle);
    expect(document.body).toHaveClass('bg-purple');
  });

  test('navigates to About page when About link is clicked', () => {
    render(<AppWrapper />);
    const aboutLink = screen.getByRole('link', { name: /about/i });
    fireEvent.click(aboutLink);
    expect(screen.getByText(/About Us/i)).toBeInTheDocument();
  });

  test('shows alert when text is transformed', () => {
    render(<AppWrapper />);
    const textArea = screen.getByRole('textbox');
    const upperCaseButton = screen.getByRole('button', { name: /convert to uppercase/i });
    
    fireEvent.change(textArea, { target: { value: 'test text' } });
    fireEvent.click(upperCaseButton);

    expect(screen.getByRole('alert')).toBeInTheDocument();
    expect(screen.getByRole('alert')).toHaveTextContent(/Converted to uppercase/i);
  });
});