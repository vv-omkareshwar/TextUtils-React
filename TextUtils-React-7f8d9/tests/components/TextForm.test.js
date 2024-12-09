import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TextForm from '../../src/components/TextForm';

describe('TextForm Component', () => {
  const mockShowAlert = jest.fn();

  beforeEach(() => {
    render(<TextForm mode="light" heading="Test Heading" showAlert={mockShowAlert} />);
  });

  test('renders TextForm component', () => {
    expect(screen.getByText('Test Heading')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  test('converts text to uppercase', () => {
    const textbox = screen.getByRole('textbox');
    fireEvent.change(textbox, { target: { value: 'hello world' } });
    fireEvent.click(screen.getByText('Convert to Uppercase'));
    expect(textbox.value).toBe('HELLO WORLD');
  });

  test('converts text to lowercase', () => {
    const textbox = screen.getByRole('textbox');
    fireEvent.change(textbox, { target: { value: 'HELLO WORLD' } });
    fireEvent.click(screen.getByText('Convert to Lowercase'));
    expect(textbox.value).toBe('hello world');
  });

  test('clears text', () => {
    const textbox = screen.getByRole('textbox');
    fireEvent.change(textbox, { target: { value: 'Some text' } });
    fireEvent.click(screen.getByText('Clear Text'));
    expect(textbox.value).toBe('');
  });

  test('copies text to clipboard', () => {
    const textbox = screen.getByRole('textbox');
    fireEvent.change(textbox, { target: { value: 'Copy this text' } });
    
    // Mock clipboard API
    Object.assign(navigator, {
      clipboard: {
        writeText: jest.fn().mockImplementation(() => Promise.resolve()),
      },
    });

    fireEvent.click(screen.getByText('Copy Text'));
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('Copy this text');
  });

  test('removes extra spaces', () => {
    const textbox = screen.getByRole('textbox');
    fireEvent.change(textbox, { target: { value: '  Extra   spaces   here  ' } });
    fireEvent.click(screen.getByText('Remove Extra Spaces'));
    expect(textbox.value).toBe('Extra spaces here');
  });

  test('displays correct word and character count', () => {
    const textbox = screen.getByRole('textbox');
    fireEvent.change(textbox, { target: { value: 'This is a test sentence.' } });
    expect(screen.getByText('5 words and 24 characters')).toBeInTheDocument();
  });

  test('calculates reading time', () => {
    const textbox = screen.getByRole('textbox');
    fireEvent.change(textbox, { target: { value: 'This is a test sentence. '.repeat(50) } });
    expect(screen.getByText('1.3 Minutes read')).toBeInTheDocument();
  });

  test('handles undo functionality', () => {
    const textbox = screen.getByRole('textbox');
    fireEvent.change(textbox, { target: { value: 'Initial text' } });
    fireEvent.click(screen.getByText('Convert to Uppercase'));
    expect(textbox.value).toBe('INITIAL TEXT');
    fireEvent.click(screen.getByText('Undo'));
    expect(textbox.value).toBe('Initial text');
  });

  // Note: The speak functionality is not easily testable in a Jest environment
  // as it relies on the Web Speech API. Consider mocking this functionality
  // or testing it in an end-to-end test suite.
});