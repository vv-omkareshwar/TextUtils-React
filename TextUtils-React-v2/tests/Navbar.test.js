// Navbar.test.js

// Mock Jest
const jest = {
  fn: () => jest.fn(),
  clearAllMocks: () => {}
};

// Mock React
const React = {
  createElement: jest.fn(),
};

// Mock PropTypes
const PropTypes = {
  string: jest.fn(),
  func: jest.fn(),
};

// Mock react-router-dom
const Link = jest.fn();

// Mock getNavStyle function
const getNavStyle = (mode) => {
  if (mode === 'purple') {
    return {
      backgroundColor: '#432874',
      color: 'white'
    };
  }
  return {};
};

// Mock any hooks or other dependencies the Navbar might use
const useState = jest.fn();
const useEffect = jest.fn();

// Mock the entire react module
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState,
  useEffect,
}));

// Import the component to be tested
import Navbar from '../src/components/layout/Navbar';

// Mock props
const mockProps = {
  mode: 'light',
  title: 'TextUtils',
  aboutText: 'About Us',
  toggleLMode: jest.fn(),
  toggleDMode: jest.fn(),
  togglePMode: jest.fn(),
};

describe('Navbar Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders correctly with default props', () => {
    const navbar = Navbar(mockProps);
    expect(React.createElement).toHaveBeenCalledWith('nav', expect.any(Object), expect.any(Array));
  });

  test('applies correct style based on mode', () => {
    const purpleProps = { ...mockProps, mode: 'purple' };
    const navbar = Navbar(purpleProps);
    expect(React.createElement).toHaveBeenCalledWith('nav', expect.objectContaining({
      style: { backgroundColor: '#432874', color: 'white' }
    }), expect.any(Array));
  });

  test('renders correct title', () => {
    const navbar = Navbar(mockProps);
    expect(React.createElement).toHaveBeenCalledWith(Link, expect.objectContaining({
      children: 'TextUtils'
    }), null);
  });

  test('renders correct about text', () => {
    const navbar = Navbar(mockProps);
    expect(React.createElement).toHaveBeenCalledWith(Link, expect.objectContaining({
      children: 'About Us'
    }), null);
  });

  test('calls toggle functions when buttons are clicked', () => {
    const navbar = Navbar(mockProps);
    
    // Simulate clicks
    const lightModeInput = navbar.props.children[1].props.children[2].props.children[0];
    lightModeInput.props.onClick();
    expect(mockProps.toggleLMode).toHaveBeenCalled();

    const darkModeInput = navbar.props.children[1].props.children[2].props.children[2];
    darkModeInput.props.onClick();
    expect(mockProps.toggleDMode).toHaveBeenCalled();

    const purpleModeInput = navbar.props.children[1].props.children[2].props.children[4];
    purpleModeInput.props.onClick();
    expect(mockProps.togglePMode).toHaveBeenCalled();
  });

  test('applies correct classes based on mode', () => {
    const darkProps = { ...mockProps, mode: 'dark' };
    const navbar = Navbar(darkProps);
    expect(React.createElement).toHaveBeenCalledWith('nav', expect.objectContaining({
      className: expect.stringContaining('navbar-dark bg-dark')
    }), expect.any(Array));
  });

  test('renders correct number of nav items', () => {
    const navbar = Navbar(mockProps);
    const navItems = navbar.props.children[1].props.children[1].props.children;
    expect(navItems.length).toBe(2);
  });

  test('applies correct props to Link components', () => {
    const navbar = Navbar(mockProps);
    const homeLink = navbar.props.children[1].props.children[1].props.children[0].props.children;
    const aboutLink = navbar.props.children[1].props.children[1].props.children[1].props.children;

    expect(homeLink.props.to).toBe('/TextUtils-React');
    expect(aboutLink.props.to).toBe('/about');
  });
});

// The rest of the file remains unchanged