import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TextForm from '../src/components/TextForm';

describe('TextForm Component', () => {
  const mockShowAlert = jest.fn();

  beforeEach(() => {
    render(<TextForm showAlert={mockShowAlert} mode="light" heading="Test Heading" />);
  });

  test('renders TextForm component', () => {
    expect(screen.getByText('Test Heading')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  test('handles uppercase conversion', () => {
    const textbox = screen.getByRole('textbox');
    fireEvent.change(textbox, { target: { value: 'hello world' } });
    fireEvent.click(screen.getByText('Convert to Uppercase'));
    expect(textbox.value).toBe('HELLO WORLD');
    expect(mockShowAlert).toHaveBeenCalledWith("Text is converted to uppercase.!!!", "success");
  });

  test('handles lowercase conversion', () => {
    const textbox = screen.getByRole('textbox');
    fireEvent.change(textbox, { target: { value: 'HELLO WORLD' } });
    fireEvent.click(screen.getByText('Convert to Lowercase'));
    expect(textbox.value).toBe('hello world');
    expect(mockShowAlert).toHaveBeenCalledWith("Text is converted to lowercase..!!!", "success");
  });

  test('handles text clearing', () => {
    const textbox = screen.getByRole('textbox');
    fireEvent.change(textbox, { target: { value: 'Some text' } });
    fireEvent.click(screen.getByText('Clear'));
    expect(textbox.value).toBe(' ');
    expect(mockShowAlert).toHaveBeenCalledWith("Text is cleared!!!", "success");
  });

  test('handles copy to clipboard', () => {
    const textbox = screen.getByRole('textbox');
    fireEvent.change(textbox, { target: { value: 'Copy this text' } });
    
    // Mock clipboard API
    Object.assign(navigator, {
      clipboard: {
        writeText: jest.fn(),
      },
    });

    fireEvent.click(screen.getByText('Copy Text'));
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('Copy this text');
    expect(mockShowAlert).toHaveBeenCalledWith("Text Copied to Clipboard.!!!", "success");
  });

  test('handles extra space removal', () => {
    const textbox = screen.getByRole('textbox');
    fireEvent.change(textbox, { target: { value: 'Too   many    spaces' } });
    fireEvent.click(screen.getByText('Remove Extra Spaces'));
    expect(textbox.value).toBe('Too many spaces');
    expect(mockShowAlert).toHaveBeenCalledWith("All Extra spaces are removed from the text.", "success");
  });

  test('handles text replacement', () => {
    const textbox = screen.getByRole('textbox');
    fireEvent.change(textbox, { target: { value: 'Replace this word' } });
    
    const findInput = screen.getByLabelText('Find :');
    const replaceInput = screen.getByLabelText('Replace :');
    
    fireEvent.change(findInput, { target: { value: 'this' } });
    fireEvent.change(replaceInput, { target: { value: 'that' } });
    
    fireEvent.click(screen.getByText('Replace'));
    
    expect(textbox.value).toBe('Replace that word');
    expect(mockShowAlert).toHaveBeenCalledWith("Text Replaced successfully.!!!", "success");
  });

  test('disables buttons when text is empty', () => {
    const buttons = screen.getAllByRole('button');
    buttons.forEach(button => {
      if (button.textContent !== 'Replace' && button.textContent !== 'Clear') {
        expect(button).toBeDisabled();
      }
    });
  });

  test('calculates correct word and character count', () => {
    const textbox = screen.getByRole('textbox');
    fireEvent.change(textbox, { target: { value: 'This is a test sentence.' } });
    expect(screen.getByText('5 words and 24 characters')).toBeInTheDocument();
  });

  test('calculates correct reading time', () => {
    const textbox = screen.getByRole('textbox');
    fireEvent.change(textbox, { target: { value: 'This is a test sentence.' } });
    expect(screen.getByText('0.04 Minutes needed')).toBeInTheDocument();
  });
});