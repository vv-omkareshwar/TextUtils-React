import React from 'react';
import { render, screen } from '@testing-library/react';
import Alert from '../../src/components/Alert';

describe('Alert Component', () => {
  test('renders alert message when alert prop is provided', () => {
    const alertProps = { type: 'success', msg: 'This is a success message' };
    render(<Alert alert={alertProps} />);
    
    const alertElement = screen.getByRole('alert');
    expect(alertElement).toBeInTheDocument();
    expect(alertElement).toHaveTextContent('Success: This is a success message');
  });

  test('does not render alert when alert prop is null', () => {
    render(<Alert alert={null} />);
    
    const alertElement = screen.queryByRole('alert');
    expect(alertElement).not.toBeInTheDocument();
  });

  test('capitalizes the first letter of the alert type', () => {
    const alertProps = { type: 'warning', msg: 'This is a warning message' };
    render(<Alert alert={alertProps} />);
    
    const alertElement = screen.getByRole('alert');
    expect(alertElement).toHaveTextContent('Warning: This is a warning message');
  });
});