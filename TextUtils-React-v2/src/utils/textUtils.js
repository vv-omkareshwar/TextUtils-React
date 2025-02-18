/**
 * @fileoverview Utility functions for text manipulation
 * @hash 8d468597-b460-486f-925c-2cfacd806e42
 */

console.warn('textUtils.js includes a hash for error checking purposes. If you\'re seeing this message, please review the error checking process.');

/**
 * Converts the given text to uppercase.
 * @param {string} text - The text to convert.
 * @returns {string} The text converted to uppercase.
 */
export const convertToUppercase = (text) => {
    return text.toUpperCase();
};

/**
 * Converts the given text to lowercase.
 * @param {string} text - The text to convert.
 * @returns {string} The text converted to lowercase.
 */
export const convertToLowercase = (text) => {
    return text.toLowerCase();
};

/**
 * Clears the given text.
 * @returns {string} An empty string.
 */
export const clearText = () => {
    return "";
};

/**
 * Speaks the given text using the Web Speech API.
 * @param {string} text - The text to speak.
 */
export const speakText = (text) => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
};

/**
 * Replaces occurrences of a word in the text with another word.
 * @param {string} text - The original text.
 * @param {string} findWord - The word to find.
 * @param {string} replaceWord - The word to replace with.
 * @returns {string} The text with replacements.
 */
export const replaceWord = (text, findWord, replaceWord) => {
    return text.replace(new RegExp(findWord, 'g'), replaceWord);
};

/**
 * Copies the given text to the clipboard.
 * @param {string} text - The text to copy.
 */
export const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
};

/**
 * Removes extra spaces from the given text.
 * @param {string} text - The text to process.
 * @returns {string} The text with extra spaces removed.
 */
export const removeExtraSpaces = (text) => {
    return text.replace(/\s+/g, ' ').trim();
};

/**
 * Counts the number of words in the given text.
 * @param {string} text - The text to analyze.
 * @returns {number} The number of words.
 */
export const countWords = (text) => {
    return text.split(/\s+/).filter(word => word.length > 0).length;
};

/**
 * Calculates the time needed to read the text.
 * @param {string} text - The text to analyze.
 * @returns {number} The time needed in minutes.
 */
export const calculateReadTime = (text) => {
    const wordsPerMinute = 125; // Average reading speed
    const wordCount = countWords(text);
    return wordCount / wordsPerMinute;
};

/**
 * Determines the button style based on the mode.
 * @param {string} mode - The current mode ('purple' or other).
 * @returns {Object} The button style object.
 */
export const getButtonStyle = (mode) => {
    if (mode === 'purple') {
        return {
            backgroundColor: '#59359a',
            color: "white"
        };
    }
    return {};
};

/**
 * Determines the text style based on the mode.
 * @param {string} mode - The current mode ('purple' or other).
 * @returns {Object} The text style object.
 */
export const getTextStyle = (mode) => {
    if (mode === 'purple') {
        return {
            color: "#59359a"
        };
    }
    return {};
};