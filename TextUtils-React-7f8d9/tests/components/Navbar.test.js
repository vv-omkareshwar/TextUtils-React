import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../../src/components/Navbar';

describe('Navbar component', () => {
  const defaultProps = {
    mode: 'light',
    title: 'TextUtils',
    aboutText: 'About',
    toggleLMode: jest.fn(),
    toggleDMode: jest.fn(),
    togglePMode: jest.fn(),
  };

  const renderNavbar = (props = {}) => {
    return render(
      <Router>
        <Navbar {...defaultProps} {...props} />
      </Router>
    );
  };

  test('renders navbar with correct title', () => {
    renderNavbar();
    const titleElement = screen.getByText(/TextUtils/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders Home link', () => {
    renderNavbar();
    const homeLink = screen.getByText(/Home/i);
    expect(homeLink).toBeInTheDocument();
  });

  test('renders About link with custom text', () => {
    const customAboutText = 'Custom About';
    renderNavbar({ aboutText: customAboutText });
    const aboutLink = screen.getByText(customAboutText);
    expect(aboutLink).toBeInTheDocument();
  });

  test('renders mode toggle buttons', () => {
    renderNavbar();
    const lightModeButton = screen.getByText(/Light/i);
    const darkModeButton = screen.getByText(/Dark/i);
    const purpleModeButton = screen.getByText(/Purple/i);
    expect(lightModeButton).toBeInTheDocument();
    expect(darkModeButton).toBeInTheDocument();
    expect(purpleModeButton).toBeInTheDocument();
  });

  test('applies correct styles based on mode', () => {
    renderNavbar({ mode: 'dark' });
    const navbar = screen.getByRole('navigation');
    expect(navbar).toHaveClass('navbar-dark');
    expect(navbar).toHaveClass('bg-dark');
  });
});