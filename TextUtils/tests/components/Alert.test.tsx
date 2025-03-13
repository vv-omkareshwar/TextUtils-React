import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

// Mock implementation of the Alert component
const Alert: React.FC<{ alert: { type: string; msg: string } | null }> = ({ alert }) => {
  const capitalize = (msg: string): string => {
    const lower = msg.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    <div style={{ height: '50px' }}>
      {alert && (
        <div
          className={`alert alert-${alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capitalize(alert.type)}</strong>: {alert.msg}
        </div>
      )}
    </div>
  );
};

describe('Alert Component', () => {
  // Test case for capitalize function
  describe('capitalize function', () => {
    const testCases = [
      { input: 'success', expected: 'Success' },
      { input: 'ERROR', expected: 'Error' },
      { input: 'warning', expected: 'Warning' },
      { input: 'info', expected: 'Info' },
    ];

    testCases.forEach(({ input, expected }) => {
      it(`should capitalize "${input}" correctly`, () => {
        const result = (Alert as any).type.prototype.capitalize(input);
        expect(result).toBe(expected);
      });
    });
  });

  // Test cases for Alert component rendering
  describe('Alert rendering', () => {
    it('should render success alert correctly', () => {
      const alertProps = { type: 'success', msg: 'Operation completed successfully' };
      render(<Alert alert={alertProps} />);

      const alertElement = screen.getByRole('alert');
      expect(alertElement).toHaveClass('alert alert-success alert-dismissible fade show');
      expect(alertElement).toHaveTextContent('Success: Operation completed successfully');
    });

    it('should render error alert correctly', () => {
      const alertProps = { type: 'error', msg: 'An error occurred' };
      render(<Alert alert={alertProps} />);

      const alertElement = screen.getByRole('alert');
      expect(alertElement).toHaveClass('alert alert-error alert-dismissible fade show');
      expect(alertElement).toHaveTextContent('Error: An error occurred');
    });

    it('should not render alert when alert prop is null', () => {
      render(<Alert alert={null} />);

      const alertElement = screen.queryByRole('alert');
      expect(alertElement).toBeNull();
    });
  });

  // Additional test cases
  describe('Alert component edge cases', () => {
    it('should handle empty message', () => {
      const alertProps = { type: 'info', msg: '' };
      render(<Alert alert={alertProps} />);

      const alertElement = screen.getByRole('alert');
      expect(alertElement).toHaveTextContent('Info:');
    });

    it('should handle long messages', () => {
      const longMessage = 'This is a very long message that should still be displayed correctly in the alert component without any truncation or overflow issues.';
      const alertProps = { type: 'warning', msg: longMessage };
      render(<Alert alert={alertProps} />);

      const alertElement = screen.getByRole('alert');
      expect(alertElement).toHaveTextContent(`Warning: ${longMessage}`);
    });

    it('should handle unknown alert types', () => {
      const alertProps = { type: 'unknown', msg: 'Unknown alert type' };
      render(<Alert alert={alertProps} />);

      const alertElement = screen.getByRole('alert');
      expect(alertElement).toHaveClass('alert alert-unknown alert-dismissible fade show');
      expect(alertElement).toHaveTextContent('Unknown: Unknown alert type');
    });
  });
});