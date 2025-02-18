import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

// Mock implementation of the Alert component
const Alert = ({ alert }) => {
  const capitalize = (msg) => {
    const lower = msg.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    <div style={{ height: '50px' }}>
      {alert && (
        <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
          <strong>{capitalize(alert.type)}</strong>: {alert.msg}
        </div>
      )}
    </div>
  );
};

// Test suite for Alert component
describe('Alert Component', () => {
  // Test case: Alert renders correctly when alert prop is provided
  test('renders alert message when alert prop is provided', () => {
    const alertProps = { type: 'success', msg: 'Operation successful' };
    render(<Alert alert={alertProps} />);
    
    const alertElement = screen.getByRole('alert');
    expect(alertElement).toBeInTheDocument();
    expect(alertElement).toHaveTextContent('Success: Operation successful');
    expect(alertElement).toHaveClass('alert alert-success alert-dismissible fade show');
  });

  // Test case: Alert doesn't render when alert prop is null
  test('does not render alert when alert prop is null', () => {
    render(<Alert alert={null} />);
    
    const alertElement = screen.queryByRole('alert');
    expect(alertElement).not.toBeInTheDocument();
  });

  // Test case: Alert renders with different types
  test.each([
    ['success', 'Success message'],
    ['danger', 'Error occurred'],
    ['warning', 'Warning: proceed with caution'],
    ['info', 'Information update']
  ])('renders alert with type %s and message %s', (type, msg) => {
    const alertProps = { type, msg };
    render(<Alert alert={alertProps} />);
    
    const alertElement = screen.getByRole('alert');
    expect(alertElement).toBeInTheDocument();
    expect(alertElement).toHaveTextContent(`${type.charAt(0).toUpperCase() + type.slice(1)}: ${msg}`);
    expect(alertElement).toHaveClass(`alert alert-${type} alert-dismissible fade show`);
  });

  // Test case: Alert capitalizes type correctly
  test('capitalizes alert type correctly', () => {
    const alertProps = { type: 'success', msg: 'Test message' };
    render(<Alert alert={alertProps} />);
    
    const strongElement = screen.getByText('Success');
    expect(strongElement).toBeInTheDocument();
  });

  // Test case: Alert handles empty message
  test('renders alert with empty message', () => {
    const alertProps = { type: 'info', msg: '' };
    render(<Alert alert={alertProps} />);
    
    const alertElement = screen.getByRole('alert');
    expect(alertElement).toBeInTheDocument();
    expect(alertElement).toHaveTextContent('Info:');
  });

  // Test case: Alert handles long messages
  test('renders alert with long message', () => {
    const longMessage = 'This is a very long alert message that should still be displayed correctly in the alert component without any issues or truncation.';
    const alertProps = { type: 'warning', msg: longMessage };
    render(<Alert alert={alertProps} />);
    
    const alertElement = screen.getByRole('alert');
    expect(alertElement).toBeInTheDocument();
    expect(alertElement).toHaveTextContent(`Warning: ${longMessage}`);
  });
});

// If you need to run these tests, you would typically use a test runner like Jest.
// For a standalone file, you can add a simple test runner implementation:

const runTests = () => {
  let passedTests = 0;
  let failedTests = 0;

  const test = (name, testFn) => {
    try {
      testFn();
      console.log(`✅ Test passed: ${name}`);
      passedTests++;
    } catch (error) {
      console.error(`❌ Test failed: ${name}`);
      console.error(error);
      failedTests++;
    }
  };

  const expect = (received) => ({
    toBe: (expected) => {
      if (received !== expected) {
        throw new Error(`Expected ${expected} but received ${received}`);
      }
    },
    toEqual: (expected) => {
      if (JSON.stringify(received) !== JSON.stringify(expected)) {
        throw new Error(`Expected ${JSON.stringify(expected)} but received ${JSON.stringify(received)}`);
      }
    },
  });

  // Run your tests here
  test('Sample test', () => {
    expect(2 + 2).toBe(4);
  });

  console.log(`Tests completed. Passed: ${passedTests}, Failed: ${failedTests}`);
};

runTests();