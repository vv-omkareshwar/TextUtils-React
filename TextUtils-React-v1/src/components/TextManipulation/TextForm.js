import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TextForm = ({ heading, mode, showAlert }) => {
    const [text, setText] = useState('');
    const [tempText, setTempText] = useState('');
    const [fWord, setfWord] = useState('');
    const [rWord, setrWord] = useState('');

    const handleUpClick = () => {
        setTempText(text);
        const newText = text.toUpperCase();
        setText(newText);
        showAlert("Text is converted to uppercase.!!!", "success");
    };

    const speak = () => {
        const msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        showAlert("Speaking....", "success");
    };

    const handleUndo = () => {
        setText(tempText);
        showAlert("Last text retrieved..!!!", "success");
    };

    const handleOnClear = () => {
        setTempText(text);
        setText('');
        showAlert("Text is cleared!!!", "success");
    };

    const handleLowClick = () => {
        setTempText(text);
        const newText = text.toLowerCase();
        setText(newText);
        showAlert("Text is converted to lowercase..!!!", "success");
    };

    const handleOnChange = (event) => {
        setTempText(text);
        setText(event.target.value);
    };

    const handleReplace = () => {
        const newText = text.replace(fWord, rWord);
        setText(newText);
        showAlert("Text Replaced successfully.!!!", "success");
    };

    const handleFWord = (event) => {
        setfWord(event.target.value);
    };

    const handleRWord = (event) => {
        setrWord(event.target.value);
    };

    const handleRClear = () => {
        setfWord('');
        setrWord('');
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        showAlert("Text Copied to Clipboard.!!!", "success");
    };

    const handleExtraSpaces = () => {
        const newText = text.split(/[ ]+/).join(' ');
        setText(newText);
        showAlert("All Extra spaces are removed from the text.", "success");
    };

    const btnStyle = (mode) => {
        if (mode === 'purple') {
            return {
                backgroundColor: '#59359a',
                color: "white"
            };
        }
    };

    const textStyle = (mode) => {
        if (mode === 'purple') {
            return {
                color: "#59359a"
            };
        }
    };

    return (
        <>
            <div>
                <h1 className={`text-${mode === 'dark' ? 'light' : 'dark'}`}>{heading}</h1>
                <div className="mb-3">
                    <textarea
                        className={`form-control text-${mode === 'dark' ? 'light' : 'dark'}`}
                        style={{ backgroundColor: mode === 'dark' ? '#6c757d' : 'white' }}
                        value={text}
                        onChange={handleOnChange}
                        id="myBox"
                        rows="8"
                    ></textarea>
                </div>
                <button style={btnStyle(mode)} disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleOnClear}>Clear</button>
                <button style={btnStyle(mode)} disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUndo}>UNDO</button>
                <button style={btnStyle(mode)} disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button style={btnStyle(mode)} disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
                <button style={btnStyle(mode)} disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={speak}>Speak</button>
                <button style={btnStyle(mode)} disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button style={btnStyle(mode)} disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>

            <div style={textStyle(mode)} className={`container my-3 text-${mode === 'dark' ? 'light' : 'dark'}`}>
                <div className={`container py-5 border border-2 border-${mode === 'dark' ? 'light' : 'dark'}`}>
                    Find :
                    <input onChange={handleFWord} className='mx-2 my-1' type="text" value={fWord} />
                    Replace :
                    <input onChange={handleRWord} className='mx-2 my-2' type="text" value={rWord} />
                    <button style={btnStyle(mode)} disabled={fWord.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleReplace}>Replace</button>
                    <button style={btnStyle(mode)} disabled={fWord.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleRClear}>Clear</button>
                </div>
                <h2 className='my-2'>Your text summary</h2>
                <p>{text.split(/\s+/).filter((element) => element.length !== 0).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(/\s+/).filter((element) => element.length !== 0).length} Minutes needed</p>
                <h2>Preview</h2>
                <p>{text === "" ? "Nothing to preview.!!" : text}</p>
            </div>
        </>
    );
};

TextForm.propTypes = {
    heading: PropTypes.string.isRequired,
    mode: PropTypes.string.isRequired,
    showAlert: PropTypes.func.isRequired
};

export default TextForm;