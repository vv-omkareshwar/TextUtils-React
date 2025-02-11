// jest.setup.js
import '@testing-library/jest-dom';

// Set up global mocks
global.React = {
  useState: jest.fn()
};

global.SpeechSynthesisUtterance = jest.fn().mockImplementation(() => ({
  text: '',
}));

global.speechSynthesis = {
  speak: jest.fn(),
};

global.navigator.clipboard = {
  writeText: jest.fn(),
};

// TextForm.test.js

// Import the component and utility functions
import TextForm from '../src/components/TextForm/TextForm';
import * as textUtils from '../src/utils/textUtils';

// Mock the utility functions
jest.mock('../src/utils/textUtils', () => ({
  convertToUppercase: jest.fn(text => text.toUpperCase()),
  convertToLowercase: jest.fn(text => text.toLowerCase()),
  clearText: jest.fn(() => ''),
  speakText: jest.fn(),
  replaceWord: jest.fn((text, findWord, replaceWord) => text.replace(findWord, replaceWord)),
  copyToClipboard: jest.fn(),
  removeExtraSpaces: jest.fn(text => text.replace(/\s+/g, ' ').trim()),
  countWords: jest.fn(text => text.split(/\s+/).filter(word => word.length > 0).length),
  countCharacters: jest.fn(text => text.length),
  calculateReadingTime: jest.fn(text => 0.008 * text.split(/\s+/).filter(word => word.length > 0).length),
}));

// Mock props
const mockProps = {
  showAlert: jest.fn(),
  mode: 'light',
  heading: 'Test Heading',
};

describe('TextForm Component', () => {
  let setTextMock;
  let setTempTextMock;
  let setfWordMock;
  let setrWordMock;

  beforeEach(() => {
    setTextMock = jest.fn();
    setTempTextMock = jest.fn();
    setfWordMock = jest.fn();
    setrWordMock = jest.fn();

    React.useState
      .mockReturnValueOnce(['', setTextMock])
      .mockReturnValueOnce(['', setTempTextMock])
      .mockReturnValueOnce(['', setfWordMock])
      .mockReturnValueOnce(['', setrWordMock]);
  });

  test('handleUpClick converts text to uppercase', () => {
    const component = TextForm(mockProps);
    component.handleUpClick();
    expect(textUtils.convertToUppercase).toHaveBeenCalled();
    expect(setTextMock).toHaveBeenCalled();
    expect(mockProps.showAlert).toHaveBeenCalledWith("Text is converted to uppercase.!!!", "success");
  });

  test('handleLowClick converts text to lowercase', () => {
    const component = TextForm(mockProps);
    component.handleLowClick();
    expect(textUtils.convertToLowercase).toHaveBeenCalled();
    expect(setTextMock).toHaveBeenCalled();
    expect(mockProps.showAlert).toHaveBeenCalledWith("Text is converted to lowercase..!!!", "success");
  });

  test('handleonclear clears the text', () => {
    const component = TextForm(mockProps);
    component.handleonclear();
    expect(textUtils.clearText).toHaveBeenCalled();
    expect(setTextMock).toHaveBeenCalledWith('');
    expect(mockProps.showAlert).toHaveBeenCalledWith("Text is cleared!!!", "success");
  });

  test('handleExtraSpaces removes extra spaces', () => {
    const component = TextForm(mockProps);
    component.handleExtraSpaces();
    expect(textUtils.removeExtraSpaces).toHaveBeenCalled();
    expect(setTextMock).toHaveBeenCalled();
    expect(mockProps.showAlert).toHaveBeenCalledWith("All Extra spaces are removed from the text.", "success");
  });

  test('handleCopy copies text to clipboard', () => {
    const component = TextForm(mockProps);
    component.handleCopy();
    expect(navigator.clipboard.writeText).toHaveBeenCalled();
    expect(mockProps.showAlert).toHaveBeenCalledWith("Text Copied to Clipboard.!!!", "success");
  });

  test('handlereplace replaces words in the text', () => {
    const component = TextForm(mockProps);
    component.handlereplace();
    expect(textUtils.replaceWord).toHaveBeenCalled();
    expect(setTextMock).toHaveBeenCalled();
    expect(mockProps.showAlert).toHaveBeenCalledWith("Text Replaced successfully.!!!", "success");
  });

  test('speak function creates and speaks SpeechSynthesisUtterance', () => {
    const component = TextForm(mockProps);
    component.speak();
    expect(global.SpeechSynthesisUtterance).toHaveBeenCalled();
    expect(global.speechSynthesis.speak).toHaveBeenCalled();
    expect(mockProps.showAlert).toHaveBeenCalledWith("Speaking....", "success");
  });

  test('handelundo retrieves last text', () => {
    const component = TextForm(mockProps);
    component.handelundo();
    expect(setTextMock).toHaveBeenCalled();
    expect(mockProps.showAlert).toHaveBeenCalledWith("Last text retrieved..!!!", "success");
  });

  test('handleOnChange updates text state', () => {
    const component = TextForm(mockProps);
    const mockEvent = { target: { value: 'New input text' } };
    component.handleOnChange(mockEvent);
    expect(setTextMock).toHaveBeenCalledWith('New input text');
  });

  test('handlefWord updates fWord state', () => {
    const component = TextForm(mockProps);
    const mockEvent = { target: { value: 'word' } };
    component.handlefWord(mockEvent);
    expect(setfWordMock).toHaveBeenCalledWith('word');
  });

  test('handlerWord updates rWord state', () => {
    const component = TextForm(mockProps);
    const mockEvent = { target: { value: 'replacement' } };
    component.handlerWord(mockEvent);
    expect(setrWordMock).toHaveBeenCalledWith('replacement');
  });

  test('handleRClear clears fWord and rWord states', () => {
    const component = TextForm(mockProps);
    component.handleRClear();
    expect(setfWordMock).toHaveBeenCalledWith('');
    expect(setrWordMock).toHaveBeenCalledWith('');
  });
});