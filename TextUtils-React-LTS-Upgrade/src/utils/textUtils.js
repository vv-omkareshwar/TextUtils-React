// src/utils/textUtils.js

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
    const msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
};

/**
 * Replaces occurrences of a word in the text with another word.
 * @param {string} text - The original text.
 * @param {string} findWord - The word to find.
 * @param {string} replaceWord - The word to replace with.
 * @returns {string} The text with replaced words.
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
    return text.split(/\s+/).filter(element => element.length !== 0).join(" ");
};

/**
 * Counts the number of words in the given text.
 * @param {string} text - The text to analyze.
 * @returns {number} The number of words in the text.
 */
export const countWords = (text) => {
    return text.split(/\s+/).filter(element => element.length !== 0).length;
};

/**
 * Counts the number of characters in the given text.
 * @param {string} text - The text to analyze.
 * @returns {number} The number of characters in the text.
 */
export const countCharacters = (text) => {
    return text.length;
};

/**
 * Calculates the estimated reading time for the given text.
 * @param {string} text - The text to analyze.
 * @returns {number} The estimated reading time in minutes.
 */
export const calculateReadingTime = (text) => {
    const wordsPerMinute = 125; // Average reading speed
    const wordCount = countWords(text);
    return wordCount / wordsPerMinute;
};