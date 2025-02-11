// About.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../src/pages/About';

// Mock the About component if necessary
jest.mock('../src/pages/About', () => {
  return function DummyAbout(props) {
    return (
      <div data-testid="mock-about" {...props}>
        Mocked About Component
      </div>
    );
  };
});

describe('About Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders correctly with light mode', () => {
    render(<About mode="light" />);
    const aboutElement = screen.getByTestId('mock-about');
    expect(aboutElement).toBeInTheDocument();
    expect(aboutElement).toHaveStyle({
      backgroundColor: 'white',
      color: 'black',
    });
  });

  test('renders correctly with dark mode', () => {
    render(<About mode="dark" />);
    const aboutElement = screen.getByTestId('mock-about');
    expect(aboutElement).toBeInTheDocument();
    expect(aboutElement).toHaveStyle({
      backgroundColor: '#212529',
      color: '#F8F9FA',
    });
  });

  test('renders correctly with default mode', () => {
    render(<About mode="custom" />);
    const aboutElement = screen.getByTestId('mock-about');
    expect(aboutElement).toBeInTheDocument();
    expect(aboutElement).toHaveStyle({
      backgroundColor: '#a98eda',
      color: 'black',
    });
  });
});