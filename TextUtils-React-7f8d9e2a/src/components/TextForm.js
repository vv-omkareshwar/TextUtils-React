import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TextForm = ({ mode, heading, showAlert }) => {
    const [text, setText] = useState('');
    const [tempText, setTempText] = useState('');
    const [fWord, setFWord] = useState('');
    const [rWord, setRWord] = useState('');

    const handleUpClick = () => {
        setTempText(text);
        setText(text.toUpperCase());
        showAlert("Text is converted to uppercase!", "success");
    };

    const speak = () => {
        const msg = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(msg);
        showAlert("Speaking....", "success");
    };

    const handleUndo = () => {
        setText(tempText);
        showAlert("Last text retrieved!", "success");
    };

    const handleOnClear = () => {
        setTempText(text);
        setText("");
        showAlert("Text is cleared!", "success");
    };

    const handleLowClick = () => {
        setTempText(text);
        setText(text.toLowerCase());
        showAlert("Text is converted to lowercase!", "success");
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const handleReplace = () => {
        setText(text.replace(fWord, rWord));
        showAlert("Text replaced successfully!", "success");
    };

    const handleFWord = (event) => {
        setFWord(event.target.value);
    };

    const handleRWord = (event) => {
        setRWord(event.target.value);
    };

    const handleRClear = () => {
        setFWord("");
        setRWord("");
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        showAlert("Text copied to clipboard!", "success");
    };

    const handleExtraSpaces = () => {
        setText(text.replace(/\s+/g, ' ').trim());
        showAlert("All extra spaces are removed from the text.", "success");
    };

    const btnStyle = (mode) => {
        return mode === 'purple' ? { backgroundColor: '#59359a', color: "white" } : {};
    };

    const textStyle = (mode) => {
        return mode === 'purple' ? { color: "#59359a" } : {};
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
                <button style={btnStyle(mode)} disabled={!text} className="btn btn-primary mx-1 my-1" onClick={handleOnClear}>Clear</button>
                <button style={btnStyle(mode)} disabled={!text} className="btn btn-primary mx-1 my-1" onClick={handleUndo}>UNDO</button>
                <button style={btnStyle(mode)} disabled={!text} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button style={btnStyle(mode)} disabled={!text} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
                <button style={btnStyle(mode)} disabled={!text} className="btn btn-primary mx-1 my-1" onClick={speak}>Speak</button>
                <button style={btnStyle(mode)} disabled={!text} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button style={btnStyle(mode)} disabled={!text} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>

            <div style={textStyle(mode)} className={`container my-3 text-${mode === 'dark' ? 'light' : 'dark'}`}>
                <div className={`container py-5 border border-2 border-${mode === 'dark' ? 'light' : 'dark'}`}>
                    Find:
                    <input onChange={handleFWord} className='mx-2 my-1' type="text" value={fWord} />
                    Replace:
                    <input onChange={handleRWord} className='mx-2 my-2' type="text" value={rWord} />
                    <button style={btnStyle(mode)} disabled={!fWord} className="btn btn-primary mx-1 my-1" onClick={handleReplace}>Replace</button>
                    <button style={btnStyle(mode)} disabled={!fWord} className="btn btn-primary mx-1 my-1" onClick={handleRClear}>Clear</button>
                </div>
                <h2 className='my-2'>Your text summary</h2>
                <p>{text.split(/\s+/).filter(element => element.length !== 0).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(/\s+/).filter(element => element.length !== 0).length} Minutes needed</p>
                <h2>Preview</h2>
                <p>{text || "Nothing to preview!"}</p>
            </div>
        </>
    );
};

TextForm.propTypes = {
    mode: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    showAlert: PropTypes.func.isRequired
};

export default TextForm;