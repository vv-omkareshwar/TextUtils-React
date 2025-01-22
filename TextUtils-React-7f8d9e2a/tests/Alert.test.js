import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Alert from '../src/components/Alert';

describe('Alert Component', () => {
  test('renders nothing when alert prop is null', () => {
    render(<Alert alert={null} />);
    const alertElement = screen.queryByRole('alert');
    expect(alertElement).not.toBeInTheDocument();
  });

  test('renders alert with correct message and type', () => {
    const alertProps = {
      type: 'success',
      msg: 'This is a success message'
    };
    render(<Alert alert={alertProps} />);
    
    const alertElement = screen.getByRole('alert');
    expect(alertElement).toBeInTheDocument();
    expect(alertElement).toHaveClass('alert-success');
    expect(alertElement).toHaveTextContent('Success : This is a success message');
  });

  test('capitalizes the first letter of the alert type', () => {
    const alertProps = {
      type: 'warning',
      msg: 'This is a warning message'
    };
    render(<Alert alert={alertProps} />);
    
    const alertElement = screen.getByRole('alert');
    expect(alertElement).toHaveTextContent('Warning : This is a warning message');
  });

  test('alert has correct height style', () => {
    const alertProps = {
      type: 'info',
      msg: 'This is an info message'
    };
    render(<Alert alert={alertProps} />);
    
    const containerElement = screen.getByTestId('alert-container');
    expect(containerElement).toHaveStyle('height: 50px');
  });
});