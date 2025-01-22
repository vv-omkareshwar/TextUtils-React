import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import About from '../src/components/About';

describe('About Component', () => {
  const mockProps = {
    mode: 'light'
  };

  test('renders About Us heading', () => {
    render(<About {...mockProps} />);
    const headingElement = screen.getByText(/About Us/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('renders three accordion items', () => {
    render(<About {...mockProps} />);
    const accordionItems = screen.getAllByRole('button', { class: 'accordion-button' });
    expect(accordionItems).toHaveLength(3);
  });

  test('first accordion item is expanded by default', () => {
    render(<About {...mockProps} />);
    const firstAccordionBody = screen.getByText(/Textutils gives you a way to analyze your text quickly and efficiently/i);
    expect(firstAccordionBody).toBeVisible();
  });

  test('toggles accordion items when clicked', () => {
    render(<About {...mockProps} />);
    
    const secondAccordionButton = screen.getByText(/Free to use/i);
    fireEvent.click(secondAccordionButton);
    
    const secondAccordionBody = screen.getByText(/TextUtils is a free character counter tool/i);
    expect(secondAccordionBody).toBeVisible();
    
    const firstAccordionBody = screen.getByText(/Textutils gives you a way to analyze your text quickly and efficiently/i);
    expect(firstAccordionBody).not.toBeVisible();
  });

  test('applies correct background style based on mode prop', () => {
    const { rerender } = render(<About mode="light" />);
    const container = screen.getByText(/About Us/i).closest('.container');
    expect(container).toHaveStyle('background-color: white');
    expect(container).toHaveStyle('color: black');

    rerender(<About mode="dark" />);
    expect(container).toHaveStyle('background-color: #212529');
    expect(container).toHaveStyle('color: #F8F9FA');

    rerender(<About mode="purple" />);
    expect(container).toHaveStyle('background-color: #a98eda');
    expect(container).toHaveStyle('color: black');
  });

  test('applies correct border style to accordion items based on mode prop', () => {
    const { rerender } = render(<About mode="light" />);
    const accordionItems = screen.getAllByRole('button', { class: 'accordion-button' });
    
    accordionItems.forEach(item => {
      expect(item.closest('.accordion-item')).toHaveStyle('border: 2px solid black');
    });

    rerender(<About mode="dark" />);
    accordionItems.forEach(item => {
      expect(item.closest('.accordion-item')).toHaveStyle('border: 2px solid white');
    });
  });
});