import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../../src/components/About';

describe('About component', () => {
  test('renders About component in light mode', () => {
    render(<About mode="light" />);
    
    // Check if the component renders
    const aboutElement = screen.getByText(/About TextUtils/i);
    expect(aboutElement).toBeInTheDocument();

    // Check if all accordion items are present
    const accordionItems = screen.getAllByRole('button');
    expect(accordionItems).toHaveLength(3);

    // Check if the background color is correct for light mode
    const aboutContainer = screen.getByTestId('about-container');
    expect(aboutContainer).toHaveStyle('background-color: white');
    expect(aboutContainer).toHaveStyle('color: black');
  });

  test('renders About component in dark mode', () => {
    render(<About mode="dark" />);
    
    // Check if the component renders
    const aboutElement = screen.getByText(/About TextUtils/i);
    expect(aboutElement).toBeInTheDocument();

    // Check if all accordion items are present
    const accordionItems = screen.getAllByRole('button');
    expect(accordionItems).toHaveLength(3);

    // Check if the background color is correct for dark mode
    const aboutContainer = screen.getByTestId('about-container');
    expect(aboutContainer).toHaveStyle('background-color: #042743');
    expect(aboutContainer).toHaveStyle('color: white');
  });

  test('accordion items expand and collapse', async () => {
    render(<About mode="light" />);
    
    const accordionButtons = screen.getAllByRole('button');
    const firstAccordionButton = accordionButtons[0];
    
    // Check if the first accordion item is initially collapsed
    expect(firstAccordionButton).toHaveAttribute('aria-expanded', 'false');
    
    // Click to expand
    firstAccordionButton.click();
    
    // Check if it's now expanded
    expect(firstAccordionButton).toHaveAttribute('aria-expanded', 'true');
    
    // Click to collapse
    firstAccordionButton.click();
    
    // Check if it's collapsed again
    expect(firstAccordionButton).toHaveAttribute('aria-expanded', 'false');
  });
});