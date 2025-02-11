// Navbar.test.js

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../src/components/Layout/Navbar';

// Mock the navstyle function
jest.mock('../src/styles/navstyles', () => ({
  navstyle: jest.fn((mode) => {
    if (mode === 'purple') {
      return {
        backgroundColor: '#432874',
        color: 'white',
      };
    }
    return {};
  }),
}));

describe('Navbar Component', () => {
  const defaultProps = {
    mode: 'light',
    title: 'TextUtils',
    aboutText: 'About',
    toggleLMode: jest.fn(),
    toggleDMode: jest.fn(),
    togglePMode: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderNavbar = (props = defaultProps) => {
    return render(
      <Router>
        <Navbar {...props} />
      </Router>
    );
  };

  test('renders correctly with default props', () => {
    const { getByText, container } = renderNavbar();

    expect(container.firstChild.tagName).toBe('NAV');
    expect(container.firstChild.className).toContain('navbar-light');
    expect(container.firstChild.className).toContain('bg-light');

    expect(getByText('TextUtils')).toBeInTheDocument();
    expect(getByText('About')).toBeInTheDocument();
  });

  test('applies correct styles for purple mode', () => {
    const purpleProps = { ...defaultProps, mode: 'purple' };
    const { container } = renderNavbar(purpleProps);

    expect(container.firstChild).toHaveStyle({
      backgroundColor: '#432874',
      color: 'white',
    });
  });

  test('renders correct number of mode toggle buttons', () => {
    const { container } = renderNavbar();
    const inputs = container.querySelectorAll('input[type="radio"]');
    expect(inputs.length).toBe(3);
  });

  test('calls correct toggle function when mode buttons are clicked', () => {
    const { getByLabelText } = renderNavbar();

    fireEvent.click(getByLabelText('Light Mode'));
    expect(defaultProps.toggleLMode).toHaveBeenCalledTimes(1);

    fireEvent.click(getByLabelText('Dark Mode'));
    expect(defaultProps.toggleDMode).toHaveBeenCalledTimes(1);

    fireEvent.click(getByLabelText('Purple Mode'));
    expect(defaultProps.togglePMode).toHaveBeenCalledTimes(1);
  });

  test('applies correct class names based on mode', () => {
    const darkProps = { ...defaultProps, mode: 'dark' };
    const { container } = renderNavbar(darkProps);

    expect(container.firstChild.className).toContain('navbar-dark');
    expect(container.firstChild.className).toContain('bg-dark');
    expect(container.firstChild.className).toContain('border-light');
  });

  test('renders custom title and aboutText', () => {
    const customProps = {
      ...defaultProps,
      title: 'Custom Title',
      aboutText: 'Custom About',
    };
    const { getByText } = renderNavbar(customProps);

    expect(getByText('Custom Title')).toBeInTheDocument();
    expect(getByText('Custom About')).toBeInTheDocument();
  });
});