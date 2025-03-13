import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TextForm from './TextForm';

// IMPORTANT: Ensure that function names in this test file
// stay in sync with the actual TextForm component implementation.
// Note: The component has some inconsistent function naming that should be refactored.

// Mock SpeechSynthesisUtterance and window.speechSynthesis
class MockSpeechSynthesisUtterance {
  text: string = '';
}

const mockSpeak = jest.fn();

Object.defineProperty(window, 'speechSynthesis', {
  value: { speak: mockSpeak },
});

global.SpeechSynthesisUtterance = MockSpeechSynthesisUtterance as any;

// Mock navigator.clipboard
Object.defineProperty(navigator, 'clipboard', {
  value: { writeText: jest.fn() },
});

// Mock showAlert function
const mockShowAlert = jest.fn();

describe('TextForm Component', () => {
  const renderComponent = () => {
    return render(<TextForm heading="Test Heading" mode="light" showAlert={mockShowAlert} />);
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  // ... (previous tests remain unchanged)

  test('handlerWord updates replace word', () => {
    const { getByLabelText } = renderComponent();
    const replaceInput = getByLabelText('Replace :');
    fireEvent.change(replaceInput, { target: { value: 'replacement' } });
    expect(replaceInput).toHaveValue('replacement');
  });

  test('handleRClear clears find and replace inputs', () => {
    const { getByText, getByLabelText } = renderComponent();
    const findInput = getByLabelText('Find :');
    const replaceInput = getByLabelText('Replace :');
    
    fireEvent.change(findInput, { target: { value: 'word' } });
    fireEvent.change(replaceInput, { target: { value: 'replacement' } });
    
    fireEvent.click(getByText('Clear'));
    
    expect(findInput).toHaveValue('');
    expect(replaceInput).toHaveValue('');
  });

  // ... (remaining tests unchanged)
});