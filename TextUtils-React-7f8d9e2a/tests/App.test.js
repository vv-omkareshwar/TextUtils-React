import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../src/App';
import { BrowserRouter as Router } from 'react-router-dom';

describe('App Component', () => {
  test('renders TextUtils title in Navbar', () => {
    render(
      <Router>
        <App />
      </Router>
    );
    const titleElement = screen.getByText(/TextUtils/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders light mode by default', () => {
    render(
      <Router>
        <App />
      </Router>
    );
    const navbarElement = screen.getByRole('navigation');
    expect(navbarElement).toHaveClass('navbar-light');
    expect(navbarElement).toHaveClass('bg-light');
  });

  test('toggles dark mode', () => {
    render(
      <Router>
        <App />
      </Router>
    );
    const darkModeToggle = screen.getByLabelText(/Toggle Dark Mode/i);
    darkModeToggle.click();
    const navbarElement = screen.getByRole('navigation');
    expect(navbarElement).toHaveClass('navbar-dark');
    expect(navbarElement).toHaveClass('bg-dark');
  });

  test('toggles purple mode', () => {
    render(
      <Router>
        <App />
      </Router>
    );
    const purpleModeToggle = screen.getByLabelText(/Toggle Purple Mode/i);
    purpleModeToggle.click();
    const navbarElement = screen.getByRole('navigation');
    expect(navbarElement).toHaveStyle('background-color: #a98eda');
  });

  test('renders TextForm component on home route', () => {
    render(
      <Router>
        <App />
      </Router>
    );
    const textFormHeading = screen.getByText(/TextUtils - Word Counter, Character Counter/i);
    expect(textFormHeading).toBeInTheDocument();
  });

  test('renders About component on about route', () => {
    window.history.pushState({}, '', '/about');
    render(
      <Router>
        <App />
      </Router>
    );
    const aboutHeading = screen.getByText(/About Us/i);
    expect(aboutHeading).toBeInTheDocument();
  });
});