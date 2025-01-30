import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from '../src/components/Navbar';

// Mock react-router-dom Link component
jest.mock('react-router-dom', () => ({
  Link: ({ children, to }) => <a href={to}>{children}</a>,
}));

describe('Navbar Component', () => {
  test('renders navbar with correct title', () => {
    render(<Navbar title="TextUtils" />);
    const titleElement = screen.getByText(/TextUtils/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders Home and About links', () => {
    render(<Navbar />);
    const homeLink = screen.getByText(/Home/i);
    const aboutLink = screen.getByText(/About/i);
    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
  });

  test('mode toggle buttons work correctly', () => {
    const mockToggleMode = jest.fn();
    render(<Navbar toggleMode={mockToggleMode} />);
    
    const lightModeButton = screen.getByLabelText(/Light Mode/i);
    const darkModeButton = screen.getByLabelText(/Dark Mode/i);
    const purpleModeButton = screen.getByLabelText(/Purple Mode/i);

    fireEvent.click(lightModeButton);
    expect(mockToggleMode).toHaveBeenCalledWith('light');

    fireEvent.click(darkModeButton);
    expect(mockToggleMode).toHaveBeenCalledWith('dark');

    fireEvent.click(purpleModeButton);
    expect(mockToggleMode).toHaveBeenCalledWith('purple');
  });

  test('applies correct styles based on mode', () => {
    const { rerender } = render(<Navbar mode="light" />);
    let navbar = screen.getByRole('navigation');
    expect(navbar).toHaveClass('navbar-light');
    expect(navbar).toHaveClass('bg-light');

    rerender(<Navbar mode="dark" />);
    navbar = screen.getByRole('navigation');
    expect(navbar).toHaveClass('navbar-dark');
    expect(navbar).toHaveClass('bg-dark');

    rerender(<Navbar mode="purple" />);
    navbar = screen.getByRole('navigation');
    expect(navbar).toHaveClass('navbar-dark');
    expect(navbar).toHaveStyle('background-color: purple');
  });
});