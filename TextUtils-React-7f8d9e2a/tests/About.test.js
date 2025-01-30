import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import About from '../src/components/About';

describe('About Component', () => {
  // Test if the component renders without crashing
  test('renders without crashing', () => {
    render(<About />);
    expect(screen.getByText(/About TextUtils/i)).toBeInTheDocument();
  });

  // Test if the component renders correctly in light mode
  test('renders correctly in light mode', () => {
    render(<About mode="light" />);
    const aboutSection = screen.getByTestId('about-section');
    expect(aboutSection).toHaveStyle('backgroundColor: white');
    expect(aboutSection).toHaveStyle('color: black');
  });

  // Test if the component renders correctly in dark mode
  test('renders correctly in dark mode', () => {
    render(<About mode="dark" />);
    const aboutSection = screen.getByTestId('about-section');
    expect(aboutSection).toHaveStyle('backgroundColor: #042743');
    expect(aboutSection).toHaveStyle('color: white');
  });

  // Test if all accordion items are rendered
  test('renders all accordion items', () => {
    render(<About />);
    expect(screen.getByText(/Analyze Your Text/i)).toBeInTheDocument();
    expect(screen.getByText(/Free to use/i)).toBeInTheDocument();
    expect(screen.getByText(/Browser Compatible/i)).toBeInTheDocument();
  });

  // Test if the getBkgStyle function returns correct styles for different modes
  test('getBkgStyle function returns correct styles', () => {
    const { rerender } = render(<About mode="light" />);
    let aboutSection = screen.getByTestId('about-section');
    expect(aboutSection).toHaveStyle('backgroundColor: white');
    expect(aboutSection).toHaveStyle('color: black');

    rerender(<About mode="dark" />);
    aboutSection = screen.getByTestId('about-section');
    expect(aboutSection).toHaveStyle('backgroundColor: #042743');
    expect(aboutSection).toHaveStyle('color: white');
  });

  // Test if accordion items expand and collapse correctly
  test('accordion items expand and collapse', async () => {
    render(<About />);
    const user = userEvent.setup();

    const analyzeButton = screen.getByText(/Analyze Your Text/i);
    expect(screen.queryByText(/TextUtils gives you a way to analyze your text quickly and efficiently/i)).not.toBeVisible();

    await user.click(analyzeButton);
    expect(screen.getByText(/TextUtils gives you a way to analyze your text quickly and efficiently/i)).toBeVisible();

    await user.click(analyzeButton);
    expect(screen.queryByText(/TextUtils gives you a way to analyze your text quickly and efficiently/i)).not.toBeVisible();
  });
});