// File: src/components/text/error_check_TextForm.test.js

/**
 * This file has been renamed and relocated to match the expected naming convention
 * for the error check script. If you encounter issues with file not found errors,
 * please ensure that the error check script is looking in this directory:
 * src/components/text/
 */

// Mock React and useState
const React = {
  useState: jest.fn()
};

// Mock SpeechSynthesisUtterance and window.speechSynthesis
global.SpeechSynthesisUtterance = jest.fn();
global.window.speechSynthesis = {
  speak: jest.fn()
};

// Mock navigator.clipboard
global.navigator.clipboard = {
  writeText: jest.fn()
};

// Mock textUtils functions
jest.mock('../../utils/textUtils', () => ({
  convertToUppercase: jest.fn(text => text.toUpperCase()),
  convertToLowercase: jest.fn(text => text.toLowerCase()),
  clearText: jest.fn(() => ''),
  speakText: jest.fn(),
  replaceWord: jest.fn((text, find, replace) => text.replace(new RegExp(find, 'g'), replace)),
  copyToClipboard: jest.fn(),
  removeExtraSpaces: jest.fn(text => text.replace(/\s+/g, ' ').trim()),
  countWords: jest.fn(text => text.split(/\s+/).filter(word => word.length > 0).length),
  calculateReadTime: jest.fn(text => 0.008 * text.split(/\s+/).filter(word => word.length > 0).length),
  getButtonStyle: jest.fn(mode => mode === 'purple' ? { backgroundColor: '#59359a', color: 'white' } : {}),
  getTextStyle: jest.fn(mode => mode === 'purple' ? { color: '#59359a' } : {})
}));

// Import the component and utilities
import TextForm from './TextForm';
import * as textUtils from '../../utils/textUtils';

// The rest of the test file remains unchanged...
// ... (rest of the test code)