import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../src/components/Navbar';

const mockProps = {
  title: 'TextUtils',
  aboutText: 'About Us',
  mode: 'light',
  toggleLMode: jest.fn(),
  toggleDMode: jest.fn(),
  togglePMode: jest.fn(),
};

describe('Navbar Component', () => {
  test('renders Navbar with correct title', () => {
    render(
      <Router>
        <Navbar {...mockProps} />
      </Router>
    );
    const titleElement = screen.getByText('TextUtils');
    expect(titleElement).toBeInTheDocument();
  });

  test('renders Home and About links', () => {
    render(
      <Router>
        <Navbar {...mockProps} />
      </Router>
    );
    const homeLink = screen.getByText('Home');
    const aboutLink = screen.getByText('About Us');
    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
  });

  test('renders mode toggle buttons', () => {
    render(
      <Router>
        <Navbar {...mockProps} />
      </Router>
    );
    const lightModeButton = screen.getByLabelText('Light Mode');
    const darkModeButton = screen.getByLabelText('Dark Mode');
    const purpleModeButton = screen.getByLabelText('Purple Mode');
    expect(lightModeButton).toBeInTheDocument();
    expect(darkModeButton).toBeInTheDocument();
    expect(purpleModeButton).toBeInTheDocument();
  });

  test('calls toggle functions when mode buttons are clicked', () => {
    render(
      <Router>
        <Navbar {...mockProps} />
      </Router>
    );
    const lightModeButton = screen.getByLabelText('Light Mode');
    const darkModeButton = screen.getByLabelText('Dark Mode');
    const purpleModeButton = screen.getByLabelText('Purple Mode');

    fireEvent.click(lightModeButton);
    expect(mockProps.toggleLMode).toHaveBeenCalledTimes(1);

    fireEvent.click(darkModeButton);
    expect(mockProps.toggleDMode).toHaveBeenCalledTimes(1);

    fireEvent.click(purpleModeButton);
    expect(mockProps.togglePMode).toHaveBeenCalledTimes(1);
  });

  test('applies correct styles based on mode prop', () => {
    const { rerender } = render(
      <Router>
        <Navbar {...mockProps} mode="light" />
      </Router>
    );
    let navbar = screen.getByRole('navigation');
    expect(navbar).toHaveClass('navbar-light bg-light');

    rerender(
      <Router>
        <Navbar {...mockProps} mode="dark" />
      </Router>
    );
    navbar = screen.getByRole('navigation');
    expect(navbar).toHaveClass('navbar-dark bg-dark');

    rerender(
      <Router>
        <Navbar {...mockProps} mode="purple" />
      </Router>
    );
    navbar = screen.getByRole('navigation');
    expect(navbar).toHaveStyle('background-color: #432874');
    expect(navbar).toHaveStyle('color: white');
  });

  test('renders with default props when not provided', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
    const titleElement = screen.getByText('Set title here');
    const aboutLink = screen.getByText('About');
    expect(titleElement).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
  });
});