import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TextForm from '../src/components/TextForm';

// Mock the showAlert function
const mockShowAlert = jest.fn();

describe('TextForm Component', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  test('renders TextForm component', () => {
    render(<TextForm heading="Test Heading" mode="light" showAlert={mockShowAlert} />);
    expect(screen.getByText('Test Heading')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  test('converts text to uppercase', () => {
    render(<TextForm heading="Test Heading" mode="light" showAlert={mockShowAlert} />);
    const textbox = screen.getByRole('textbox');
    fireEvent.change(textbox, { target: { value: 'hello world' } });
    fireEvent.click(screen.getByText('Convert to Uppercase'));
    expect(textbox.value).toBe('HELLO WORLD');
    expect(mockShowAlert).toHaveBeenCalledWith('Converted to uppercase!', 'success');
  });

  test('converts text to lowercase', () => {
    render(<TextForm heading="Test Heading" mode="light" showAlert={mockShowAlert} />);
    const textbox = screen.getByRole('textbox');
    fireEvent.change(textbox, { target: { value: 'HELLO WORLD' } });
    fireEvent.click(screen.getByText('Convert to Lowercase'));
    expect(textbox.value).toBe('hello world');
    expect(mockShowAlert).toHaveBeenCalledWith('Converted to lowercase!', 'success');
  });

  test('clears text', () => {
    render(<TextForm heading="Test Heading" mode="light" showAlert={mockShowAlert} />);
    const textbox = screen.getByRole('textbox');
    fireEvent.change(textbox, { target: { value: 'Some text' } });
    fireEvent.click(screen.getByText('Clear Text'));
    expect(textbox.value).toBe('');
    expect(mockShowAlert).toHaveBeenCalledWith('Text Cleared!', 'success');
  });

  test('removes extra spaces', () => {
    render(<TextForm heading="Test Heading" mode="light" showAlert={mockShowAlert} />);
    const textbox = screen.getByRole('textbox');
    fireEvent.change(textbox, { target: { value: '  Hello   World  ' } });
    fireEvent.click(screen.getByText('Remove extra spaces'));
    expect(textbox.value).toBe('Hello World');
    expect(mockShowAlert).toHaveBeenCalledWith('Extra spaces removed!', 'success');
  });

  test('performs find and replace', () => {
    render(<TextForm heading="Test Heading" mode="light" showAlert={mockShowAlert} />);
    const textbox = screen.getByRole('textbox');
    fireEvent.change(textbox, { target: { value: 'Hello World' } });
    
    const findInput = screen.getByPlaceholderText('Find');
    const replaceInput = screen.getByPlaceholderText('Replace');
    
    fireEvent.change(findInput, { target: { value: 'World' } });
    fireEvent.change(replaceInput, { target: { value: 'Universe' } });
    
    fireEvent.click(screen.getByText('Replace'));
    
    expect(textbox.value).toBe('Hello Universe');
    expect(mockShowAlert).toHaveBeenCalledWith('Text replaced!', 'success');
  });

  test('calculates word count correctly', () => {
    render(<TextForm heading="Test Heading" mode="light" showAlert={mockShowAlert} />);
    const textbox = screen.getByRole('textbox');
    fireEvent.change(textbox, { target: { value: 'Hello World' } });
    expect(screen.getByText('2 words and 10 characters')).toBeInTheDocument();
  });

  test('calculates reading time', () => {
    render(<TextForm heading="Test Heading" mode="light" showAlert={mockShowAlert} />);
    const textbox = screen.getByRole('textbox');
    fireEvent.change(textbox, { target: { value: 'Hello World' } });
    expect(screen.getByText('0.01 Minutes read')).toBeInTheDocument();
  });

  test('copies text to clipboard', () => {
    // Mock the clipboard API
    const mockClipboard = {
      writeText: jest.fn()
    };
    Object.assign(navigator, {
      clipboard: mockClipboard
    });

    render(<TextForm heading="Test Heading" mode="light" showAlert={mockShowAlert} />);
    const textbox = screen.getByRole('textbox');
    fireEvent.change(textbox, { target: { value: 'Text to copy' } });
    fireEvent.click(screen.getByText('Copy Text'));

    expect(mockClipboard.writeText).toHaveBeenCalledWith('Text to copy');
    expect(mockShowAlert).toHaveBeenCalledWith('Copied to Clipboard!', 'success');
  });

  test('handles undo operation', () => {
    render(<TextForm heading="Test Heading" mode="light" showAlert={mockShowAlert} />);
    const textbox = screen.getByRole('textbox');
    fireEvent.change(textbox, { target: { value: 'Initial text' } });
    fireEvent.click(screen.getByText('Convert to Uppercase'));
    expect(textbox.value).toBe('INITIAL TEXT');
    fireEvent.click(screen.getByText('Undo'));
    expect(textbox.value).toBe('Initial text');
    expect(mockShowAlert).toHaveBeenCalledWith('Undo successful!', 'success');
  });
});