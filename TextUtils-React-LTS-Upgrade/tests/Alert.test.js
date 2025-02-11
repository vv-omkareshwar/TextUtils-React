// Alert.test.js

import React from 'react';
import { render } from '@testing-library/react';
import Alert from '../../src/components/Alert/Alert';

// Test suite
describe('Alert Component', () => {
  // Test case for Alert render with alert
  test('Alert render with alert', () => {
    const alert = {
      type: 'success',
      msg: 'Operation successful'
    };

    const { container } = render(<Alert alert={alert} />);
    const alertElement = container.querySelector('.alert');

    expect(alertElement).toBeInTheDocument();
    expect(alertElement).toHaveClass('alert-success');
    expect(alertElement).toHaveTextContent('Success: Operation successful');
  });

  // Test case for Alert render without alert
  test('Alert render without alert', () => {
    const { container } = render(<Alert />);
    const alertElement = container.querySelector('.alert');

    expect(alertElement).not.toBeInTheDocument();
  });
});